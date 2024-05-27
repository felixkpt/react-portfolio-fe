import { useAuth } from "@/contexts/AuthContext";
import useAxios from "@/hooks/useAxios";
import { config } from "@/utils/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, useNavigate } from "react-router-dom";

const AuthSection = () => {
    const { user, deleteUser } = useAuth();
    const { post } = useAxios();
    const navigate = useNavigate()

    // logout user
    const handleLogout = async (e: any) => {
        e.preventDefault();

        post('/auth/logout').then((res) => {

            if (res.message) {
                deleteUser()
                setTimeout(() => {
                    navigate(config.urls.home);
                }, 1000);
            }
        })
    };
    return (
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2 d-flex gap-2" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon={`uiw:user`} /><span className="dropdown-item disabled">{user?.name}</span></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    {
                        user ?
                            <>
                                <li><span className="dropdown-item disabled">{user?.name || 'Guest'}</span></li>
                                <li><NavLink className="dropdown-item" to="/user/account">Profile</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/user/account?tab=login-logs">Login Logs</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!" onClick={handleLogout}>Logout</a></li>
                            </>
                            :
                            <>
                                <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/register">Register</NavLink></li>
                            </>
                    }
                </ul>
            </li>
        </ul>)
}

export default AuthSection