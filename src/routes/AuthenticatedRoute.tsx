import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { SIGN_IN } from "../constants/routesConstants";
import { RootState } from "../reducers/store";

const AuthenticatedRoutes = () => {
    const authentication = useSelector(
        (state: RootState) => state.authentication.data
    );

    return !!authentication.token ? <Outlet /> : <Navigate to={SIGN_IN} />;
};

export default AuthenticatedRoutes;
