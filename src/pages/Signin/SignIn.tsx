import { Card, Col, Divider, Row } from "antd";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import SigninForm from "../../components/Signin/SigninForm";
import { ROUTES } from "../../constants";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import AuthenticationInterface from "../../interfaces/AuthenticationInterface";

const Signin = () => {
    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;

    return !token ? (
        <Row style={{ height: "80vh" }} align="middle" justify="center">
            <Col span={12}>
                <Card className="shadow rounded">
                    <h1 className="text-center text-primary font-rampart mb-4">
                        CONTACT MANAGER
                    </h1>

                    <Divider>SIGN IN</Divider>

                    <SigninForm />

                    <Divider>Don't have account?</Divider>

                    <p className="text-center">
                        <Link to={ROUTES.SIGN_UP} className="mx-auto">
                            Sign-up
                        </Link>
                        <span> to continue!</span>
                    </p>
                </Card>
            </Col>
        </Row>
    ) : (
        <Navigate to={ROUTES.HOME} />
    );
};

export default Signin;
