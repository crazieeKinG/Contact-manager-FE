import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<div>Home</div>} />
                <Route
                    path={ROUTES.ADD_CONTACT}
                    element={<div>New contact</div>}
                />
                <Route path={ROUTES.EDIT_CONTACT} element={<div>Edit</div>} />
                <Route path={ROUTES.SIGN_IN} element={<Signin />} />
                <Route path={ROUTES.SIGN_UP} element={<Signup />} />
                <Route path={ROUTES.NOT_FOUND} element={<div>not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;
