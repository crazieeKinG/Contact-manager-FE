import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "../components/Logout/Logout";
import { HOME, LOGOUT, SIGN_IN, SIGN_UP } from "../constants/routesConstants";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import AuthenticatedRoutes from "./AuthenticatedRoute";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<AuthenticatedRoutes />}>
                    <Route
                        index
                        element={
                            <div>
                                Home
                                <Link
                                    to={LOGOUT}
                                    className="text-decoration-none"
                                >
                                    Logout
                                </Link>
                            </div>
                        }
                    />
                    <Route path={LOGOUT} element={<Logout />} />
                </Route>
                <Route path={SIGN_IN} element={<SignIn />} />
                <Route path={SIGN_UP} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};
