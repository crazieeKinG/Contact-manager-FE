import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import { SIGN_IN } from "../constants/routesConstants";
import { RootState } from "../reducers/store";

const AuthenticatedRoutes = () => {
    const authentication = useSelector(
        (state: RootState) => state.authentication.data
    );

    return !!authentication.token ? (
        <div>
            <NavBar />
            <div className="content__container">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to={SIGN_IN} />
    );
};

export default AuthenticatedRoutes;
