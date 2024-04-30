import { useEffect, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Str from '@/utils/Str';
import { Icon } from '@iconify/react/dist/iconify.js';
import MenuTree from './MenuTree';
import RoutesList from './RoutesList';
import Select from 'react-select';
import { useRolePermissionsContext } from '@/contexts/RolePermissionsContext';
import Loader from '@/components/Loader';
import { NavLink } from 'react-router-dom';
import { baseURL, config } from '../../../utils/helpers';
import useAxios from '../../../hooks/useAxios';
import { publish, subscribe, unsubscribe } from '../../../utils/events';
import useAutoPostDone from '../../../hooks/useAutoPostDone';
import { RouteCollectionInterface } from '../../../interfaces/RolePermissionsInterfaces';

const Index = () => {
  const { user } = useAuth();
  const { event } = useAutoPostDone()

  const { roles, setCurrentRole, currentRole, userMenu, expandedRootFolders, loadingMenu: loading } = useRolePermissionsContext();

  useEffect(() => {
    const expand = document.body.querySelector('.btn-expand-collapse');
    if (expand) {
      expand.addEventListener('click', collapseEvent);
    }

    return () => removeEventListener('click', collapseEvent);
  }, [currentRole]);

  function collapseEvent() {
    const trg = document.body.querySelector('#layoutWrapper');

    if (trg) {
      trg.classList.toggle('collapsed');

      const isToggled = trg.classList.contains('collapsed');
      localStorage.setItem('sb|sidebar-collapse', isToggled.toString());
    }
  }

  useEffect(() => {
    const exists = localStorage.getItem('sb|sidebar-collapse');
    if (exists) {
      const collaped = JSON.parse(exists);
      if (collaped === true) {
        collapseEvent();
      }
    }
  }, []);

  const memoizeMenu = useMemo(() => {

    return (
      <>
        {Array.isArray(userMenu) && userMenu.length > 0 ? (
          <ul className="list-unstyled nested-routes main">
            {userMenu.map((child: RouteCollectionInterface) => {
              const { routes, children, icon, folder, hidden } = child;
              const shouldShowFolder = !hidden && (routes.length > 0 || children.length > 0);
              const currentId = Str.slug((folder).replace(/^\//, ''));
              const indent = 2;

              // Check if the folder should be expanded
              const isExpanded = expandedRootFolders.includes(folder);

              if (shouldShowFolder && !isExpanded) {
                return (
                  <div key={currentId} className='position-relative top-0 first-level'>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={`#${currentId}`} aria-expanded="false" aria-controls="collapsePages">
                      <span className='d-flex align-items-center gap-1'>
                        <Icon className='nav-icon' icon={`${icon || 'prime:bookmark'}`} />
                        <span className='nav-label'>{Str.title(Str.afterLast(folder, '/'))}</span>
                      </span>
                      <div className="sb-sidenav-collapse-arrow"><Icon className='arrow-section' icon={`bi-chevron-down`} /></div>
                    </a>
                    <div className="collapse position-fixed-collaped sb-sidenav-light" id={`${currentId}`} aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                      <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <RoutesList routes={routes} />
                        {children.length > 0 && children.map((child) => <MenuTree key={child.folder} indent={indent} child={child} prevId={currentId} />)}
                      </nav>
                    </div>
                  </div>
                );
              } else if (shouldShowFolder && isExpanded) {
                return (
                  <div key={currentId}>
                    <RoutesList routes={routes} />
                    {children.length > 0 && children.map((child) => <MenuTree key={child.folder} indent={indent} child={child} prevId={currentId} />)}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </ul>
        ) : (
          <div className='ps-2 pt-3'>
            {!currentRole || loading ?
              <Loader justify="center" message="Getting menu..." />
              : `No menus associated with role.`
            }
          </div>
        )}
      </>
    );
  }, [user, userMenu, loading]);

  useEffect(() => {
    if (event) {
      if (event.id == 'logoutBtn') {
        if (event.status == 'success') {
          localStorage.removeItem(`${config.storageName}.user`);
          window.location.href = '/';
        }
      }
    }
  }, [event])

  useEffect(() => {

    subscribe('hideSideNav', toggleSidebar)

    return () => unsubscribe('hideSideNav', toggleSidebar)

  }, []);

  useEffect(() => {

    if (window.innerWidth >= 992)
      toggleSidebar({ detail: 'show' })

  }, [window.innerWidth]);

  const { get: getAbout, loading: loadingAbout, loaded: loadedAbout, errors: errorsAbout, data: dataAbout } = useAxios()

  useEffect(() => {
    getAbout('/about/view/default')
  }, [])

  return (
    <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div className="sb-sidenav-menu shadow mt-4 pt-4">
        <div className="brand-and-menu">
          <NavLink to="/" onClick={() => publish('hideSideNav', 'hide')}
            className='navbar-brand side-navbar-brand d-flex flex-column justify-content-center align-items-center gap-2'
          >
            {
              dataAbout?.data &&
              <>
                <div className='pf-avatar pf-avatar-sm'>
                  <img src={baseURL(`assets/${dataAbout?.data?.image}`)} alt="" />
                </div>
                <span>{dataAbout?.data.name}</span>
                <div className='my-3 border-light border-top-0 border-opacity-50'></div>
              </>
            }
          </NavLink>
          <div className='nav menu-inner px-2' id='menu'>
            <div className='menu-content'>
              {memoizeMenu}
              <div id='role-switcher' title='Switch your role'>
                {
                  user && roles.length > 0 &&
                  <Select
                    className="basic-single text-dark mb-2"
                    classNamePrefix="select"
                    value={currentRole || []}
                    isSearchable={true}
                    name="roles"
                    options={roles}
                    placeholder='Switch your role'
                    getOptionValue={(option: any) => `${option['id']}`}
                    getOptionLabel={(option: any) => `${option['name']}`}
                    onChange={(item: any) => setCurrentRole(item)}
                  />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-auth">
          {
            user ? (
              <div>
                <ul className="navbar-nav d-none d-lg-block">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2 d-flex gap-2" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon={`uiw:user`} /><span className="dropdown-item disabled">{user?.name}</span></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/user/profile">Profile</NavLink></li>
                      <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><form className="dropdown-item cursor-pointer" id='logoutBtn' data-action='/auth/logout' onClick={(e) => publish('autoPost', e)}>Logout</form></li>
                    </ul>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>

      </div>
    </nav>
  );
}

export const toggleSidebar = (event?: Event, forceClose = false) => {
  const action = event?.detail
  if (!document.body.classList.contains('sb-sidenav-toggled')) {
    if (action == 'hide') {
      if (window.innerWidth >= 992) return
    }
  }

  if (action) {

    if (action === 'hide') {

      if (document.body.classList.contains('sb-sidenav-toggled')) {
        document.body.classList.remove('sb-sidenav-toggled');
      }
      if (forceClose) {
        document.body.classList.add('sb-sidenav-toggled');
      }
    } else if (action === 'show') {
      document.body.classList.remove('sb-sidenav-toggled');
    } else {
      document.body.classList.toggle('sb-sidenav-toggled');
    }

  }

  const isToggled = document.body.classList.contains('sb-sidenav-toggled');
  localStorage.setItem('sb|sidebar-toggle', isToggled.toString());
};

export default Index;
