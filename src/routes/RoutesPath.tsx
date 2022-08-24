import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "../components/Logout/Logout";
import { HOME, LOGOUT, SIGN_IN, SIGN_UP } from "../constants/routesConstants";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import AuthenticatedRoutes from "./AuthenticatedRoutes";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<AuthenticatedRoutes />}>
                    <Route index element={<Home />} />
                    <Route path={LOGOUT} element={<Logout />} />
                </Route>
                <Route path={SIGN_IN} element={<SignIn />} />
                <Route path={SIGN_UP} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};
