import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toggleSidebar } from "../../Default/SideNav/Index";
import { config } from "@/utils/helpers";
import { publish } from "../../../utils/events";

interface Props {
    sidNavHidden?: boolean
    hideFrom?: 'md' | 'lg' | 'xl' | 'xxl'
}
const NavBar = ({ sidNavHidden, hideFrom }: Props) => {
    const { user } = useAuth();

    useEffect(() => {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', toggleSidebar);
        }

        return () => {
            if (sidebarToggle) {
                sidebarToggle.removeEventListener('click', toggleSidebar);
            }
        }
    }, []);

    return (
        <nav className={`sb-topnav navbar navbar-expand navbar-dark sb-navbar-dark shadow ${hideFrom ? 'd-' + hideFrom + '-none' : ''}`}>
            <div className="navbar-brand ps-3 d-flex align-items-center justify-content-md-between">
                <span className="order-2 order-md-1">
                    <NavLink to="/" className='navbar-brand ps-3'>{config.name}</NavLink>
                </span>
                {
                    !sidNavHidden &&
                    <button className="btn btn-link btn-sm me-4 me-lg-0 order-1 order-md-2 sidebarToggle" onClick={() => publish('hideSideNav', 'toggle')}><Icon icon={`fa6-solid:bars`} /></button>
                }
            </div>
            {
                user &&
                <>
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    </form>
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon={`uiw:user`} /></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><span className="dropdown-item disabled">{user?.name || 'Guest'}</span></li>
                                <li><NavLink className="dropdown-item" to="/user/profile">Profile</NavLink></li>
                                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><form className="dropdown-item cursor-pointer" id='logoutBtn' data-action='/auth/logout' onClick={(e) => publish('autoPost', e)}>Logout</form></li>
                            </ul>
                        </li>
                    </ul>
                </>
            }
        </nav>
    );
};
export default NavBar