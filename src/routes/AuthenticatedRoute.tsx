import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
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
        <Layout style={{ backgroundColor: "white" }}>
            <Header className="col-12">
                <NavBar />
            </Header>
            <Content className="content__container">
                <Outlet />
            </Content>
        </Layout>
    ) : (
        <Navigate to={SIGN_IN} />
    );
};

export default AuthenticatedRoutes;
