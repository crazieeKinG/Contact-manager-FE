import { Card, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import SigninForm from "../../components/Signin/SigninForm";
import { ROUTES } from "../../constants";

const Signin = () => {
    return (
        <Row style={{ height: "100vh" }} align="middle" justify="center">
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
    );
};

export default Signin;
