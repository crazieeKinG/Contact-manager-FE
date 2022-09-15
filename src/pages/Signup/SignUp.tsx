import { Card, Col, Divider, Row } from "antd";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import SignupForm from "../../components/Signup/SignupForm";
import { ROUTES } from "../../constants";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import AuthenticationInterface from "../../interfaces/AuthenticationInterface";
import setPageTitle from "../../utils/setPageTitle";

const Signup = () => {
    setPageTitle("Sign up");
    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;

    return !token ? (
        <Row style={{ height: "80vh" }} align="middle" justify="center">
            <Col span={12}>
                <Card className="shadow rounded">
                    <h1 className="text-center text-primary font-rampart mb-4">
                        CONTACT MANAGER
                    </h1>

                    <Divider>SIGN UP</Divider>

                    <SignupForm />

                    <Divider>Already registered?</Divider>

                    <p className="text-center">
                        <Link to={ROUTES.SIGN_IN} className="mx-auto">
                            Sign-in
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

export default Signup;
