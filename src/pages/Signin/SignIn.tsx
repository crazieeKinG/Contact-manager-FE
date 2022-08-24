import { Alert, Card, Divider, Typography } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserAccountForm from "../../components/LoginForm/UserAccountForm";
import { HOME, SIGN_UP } from "../../constants/routesConstants";
import { logIn } from "../../reducers/slices/authenticationSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleForm = (values: any) => {
        axios
            .post("/signin", values)
            .then((response) => {
                console.log(response);

                dispatch(logIn(response.data.data));
                navigate(HOME);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setErrorMessage("Invalid credentials");
                } else {
                    setErrorMessage("Connection error");
                }
            });
    };

    return (
        <div className="coverPhoto pt-4">
            <Card hoverable className="col-lg-6 mx-auto">
                <Typography.Title level={1} className="text-center">
                    CONTACT MANAGER
                </Typography.Title>
                <Divider orientation="center">SIGN-IN</Divider>
                <div className="col-lg-6 mx-auto">
                    <UserAccountForm
                        formType="Sign in"
                        handleForm={handleForm}
                    />
                    {errorMessage && (
                        <Alert message={errorMessage} type="error" closable />
                    )}

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
