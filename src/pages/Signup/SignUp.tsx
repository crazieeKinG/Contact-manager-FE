import { Card, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import SignupForm from "../../components/Signup/SignupForm";
import { ROUTES } from "../../constants";

const Signup = () => {
    return (
        <Row style={{ height: "100vh" }} align="middle" justify="center">
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
    );
};

export default Signup;
