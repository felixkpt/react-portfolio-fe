import Navbar from '../Shared/Navbar/Index';
import Footer from '../Shared/Footer/Index';
import ScrollToTop from '@/components/ScrollToTop';
import Error403 from '@/Pages/ErrorPages/Error403';
import Loader from '@/components/Loader';
import SideNav, { toggleSidebar } from '@/Layouts/Default/SideNav/Index';
import { HttpVerbsType } from '@/interfaces/UncategorizedInterfaces';
import useRestrictedAccess from '../../hooks/useRestrictedAccess';
import { useEffect, useState } from 'react';

interface Props {
    uri: string
    permission?: string | null
    method?: HttpVerbsType
    Component: React.ComponentType
}

const DefaultLayout = ({ uri, permission, method, Component }: Props) => {

   const { reloadKey, setReloadKey, checked, loadingRoutePermissions, isAllowed }  = useRestrictedAccess({ permission, uri, method, Component, })

   const [previousUrl, setPreviousUrl] = useState<string | null>(null)

    useEffect(() => {
        if (previousUrl !== location.pathname) {
            setPreviousUrl(location.pathname)
        }
    }, [location.pathname]);

    return (
        <div key={reloadKey}>
            <ScrollToTop />
            <Navbar />
            <div id="layoutWrapper">
                <div id="sideNav">
                    <SideNav />
                </div>
                <div id="mainContent" onClick={(e) => toggleSidebar(e, 'hide')}>
                    <div className='main-content mb-4'>
                        <main className='main-content-inner container-fluid mt-2 px-3 min-h-100vh'>
                            {checked && (
                                isAllowed ? <Component /> : (
                                    loadingRoutePermissions ? (
                                        <Loader message='Granting you page access...' position='static' />
                                    ) : (
                                        <Error403 previousUrl={previousUrl} currentUrl={location.pathname} setReloadKey={setReloadKey} />
                                    )
                                )
                            )}
                        </main>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
