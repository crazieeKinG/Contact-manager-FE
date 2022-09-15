import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../constants";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import ContactContextProvider from "../contexts/ContactContext";
import AuthenticationInterface from "../interfaces/AuthenticationInterface";

const AuthenticatedRoute = () => {
    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;

    return !!token ? (
        <ContactContextProvider>
            <Outlet />
        </ContactContextProvider>
    ) : (
        <Navigate to={ROUTES.SIGN_IN} />
    );
};

export default AuthenticatedRoute;
