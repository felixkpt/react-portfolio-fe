import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import usePermissions from "./usePermissions";
import { HttpVerbsType } from "../interfaces/UncategorizedInterfaces";
import { useRolePermissionsContext } from "../contexts/RolePermissionsContext";
import Str from "../utils/Str";

type Props = {
    uri: string
    permission?: string | null
    method?: HttpVerbsType
    Component: React.ComponentType
}

const useRestrictedAccess = ({ permission, uri, method, Component }: Props) => {

    const [reloadKey, setReloadKey] = useState<number>(0);

    const { user, updateUser, deleteUser, verified, setRedirectTo } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize useAxios with the desired endpoint for fetching user data
    const { data: userData, loading: loadingUser, get: getUser } = useAxios();

    const { loadingRoutePermissions, currentRole, refreshCurrentRole, setCurrentRole, fetchRoutePermissions } = useRolePermissionsContext();

    const { userCan } = usePermissions()

    const publicRoutes = ['error-404']

    const [isAllowed, setIsAllowed] = useState(false);
    const [checked, setChecked] = useState(false);
    const [tried, setTried] = useState(false);

    // Determine if bypass should occur for this route
    const reslvd = Str.beforeLast(permission || uri, '/') || '/'
    const shouldBypass = publicRoutes.includes(reslvd);

    useEffect(() => {
        // Bypass verification and loading of permissions for public routes
        if (shouldBypass) {
            setIsAllowed(true); // Route is public, no need for permission check
            setChecked(true); // Mark as checked for immediate rendering
            setTried(true); // Mark as tried to avoid further redirects
            return; // Exit the useEffect early for public routes
        }

        if (reslvd && loadingRoutePermissions === false) {
            const isAllowed = userCan(permission || uri, method || 'get');
            setIsAllowed(isAllowed);

            setTimeout(function () {
                setChecked(true);
            }, 700);
        }
    }, [loadingRoutePermissions, Component, permission, method, shouldBypass])

    useEffect(() => {
        const fetchData = () => {
            getUser('/auth/user?verify=1');
        }

        if (!currentRole && !tried) {
            setCurrentRole(undefined)
            fetchData();
        }
    }, [verified, shouldBypass, location]);

    useEffect(() => {
        if (currentRole === undefined) {
            refreshCurrentRole()
        }
    }, [currentRole, shouldBypass, location])

    useEffect(() => {
        if (tried === false && loadingUser === true) setTried(true);

        if (loadingUser === false && tried === true) {

            if (userData) {
                updateUser(userData);
            } else if (!isAllowed && !shouldBypass && !loadingRoutePermissions) {
                deleteUser();
                setRedirectTo(location.pathname);
                navigate('/login');
            }
        }
    }, [loadingUser, tried, shouldBypass, userData]);

    useEffect(() => {
        if (reloadKey > 0) {
            fetchRoutePermissions()
        }
    }, [reloadKey])

    return { reloadKey, setReloadKey, user, loadingUser, loadingRoutePermissions, checked, isAllowed }
}

export default useRestrictedAccess;
