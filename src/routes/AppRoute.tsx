import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ROUTES } from "../constants";
import EditContact from "../pages/Contact/EditContact";
import NewContact from "../pages/Contact/NewContact";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import AuthenticatedRoute from "./AuthenticatedRoute";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Navbar />}>
                    <Route path={ROUTES.HOME} element={<AuthenticatedRoute />}>
                        <Route index element={<Home />} />
                        <Route
                            path={ROUTES.ADD_CONTACT}
                            element={<NewContact />}
                        />
                        <Route
                            path={ROUTES.EDIT_CONTACT}
                            element={<EditContact />}
                        />
                    </Route>
                    <Route path={ROUTES.SIGN_IN} element={<Signin />} />
                    <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                </Route>
                <Route path={ROUTES.NOT_FOUND} element={<div>not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;
