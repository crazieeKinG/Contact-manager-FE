import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "../components/Logout/Logout";
import {
    HOME,
    LOGOUT,
    NEW_CONTACT,
    SIGN_IN,
    SIGN_UP,
    UPDATE_CONTACT,
} from "../constants/routesConstants";
import NewContact from "../pages/Contact/NewContact";
import UpdateContact from "../pages/Contact/UpdateContact";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import AuthenticatedRoutes from "./AuthenticatedRoute";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<AuthenticatedRoutes />}>
                    <Route index element={<Home />} />
                    <Route path={NEW_CONTACT} element={<NewContact />} />
                    <Route path={UPDATE_CONTACT} element={<UpdateContact />} />
                    <Route path={LOGOUT} element={<Logout />} />
                </Route>
                <Route path={SIGN_IN} element={<SignIn />} />
                <Route path={SIGN_UP} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};
