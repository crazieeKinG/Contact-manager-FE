import { Card, Divider, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { HOME, SIGN_UP } from "../../constants/routesConstants";
import { logIn } from "../../reducers/slices/authenticationSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (values: any) => {
        if (values.password === "admin") {
            dispatch(logIn("token"));
            navigate(HOME);
        }
    };

    return (
        <div className="coverPhoto pt-4">
            <Card hoverable className="col-lg-6 mx-auto">
                <Typography.Title level={1} className="text-center">
                    CONTACT MANAGER
                </Typography.Title>
                <Divider orientation="center">SIGN-IN</Divider>
                <div className="col-lg-6 mx-auto">
                    <LoginForm formType="Sign in" handleForm={handleForm} />

                    <Divider>New here </Divider>
                    <div className="text-center">
                        <Typography.Link href={SIGN_UP}>
                            Sign-up now!
                        </Typography.Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignIn;
