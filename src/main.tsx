import ReactDOM from "react-dom/client";
import "@/styles/index.scss";
import "@/styles/dropzone.scss";
import "@/styles/errorpages.scss";
import "@/styles/layout.scss";
import "@/styles/userprofile.scss";
import "@/styles/postsection.scss";
import "@/styles/portfolio.scss";
import { AuthProvider } from "@/contexts/AuthContext";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/router.js";
import ErrorBoundary from "./components/Notifications/ErrorBoundary";
import 'react-toastify/dist/ReactToastify.css';
import './scss/customized-boostrap.scss';

import { RolePermissionsProvider } from "./contexts/RolePermissionsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback="There was an error.">
    <AuthProvider>
      <RolePermissionsProvider>
        <RouterProvider router={router} />
      </RolePermissionsProvider>
    </AuthProvider>
  </ErrorBoundary>
);
