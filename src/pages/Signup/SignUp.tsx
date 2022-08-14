import { Card, Divider, Typography } from "antd";
import LoginForm from "../../components/LoginForm/LoginForm";
import { SIGN_IN } from "../../constants/routesConstants";

const SignUp = () => {
    const handleForm = (values: any) => {
        console.log(values);
    };
    return (
        <div className="coverPhoto pt-4">
            <Card hoverable className="col-lg-6 mx-auto">
                <Typography.Title level={1} className="text-center">
                    CONTACT MANAGER
                </Typography.Title>
                <Divider>SIGN-UP</Divider>
                <div className="col-lg-6 mx-auto">
                    <LoginForm formType="Sign up" handleForm={handleForm} />

                    <Divider>Already registered </Divider>
                    <div className="text-center">
                        <Typography.Link href={SIGN_IN}>
                            Sign-in now!
                        </Typography.Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignUp;
