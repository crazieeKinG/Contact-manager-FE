import { Alert, Card, Divider, Typography } from "antd";
import axios from "axios";
import { useState } from "react";
import UserAccountForm from "../../components/LoginForm/UserAccountForm";
import { SIGN_IN } from "../../constants/routesConstants";

const SignUp = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<
        "error" | "success" | "info" | "warning" | undefined
    >("error");

    const handleForm = (values: any) => {
        delete values.confirm;
        axios
            .post("/signup", values)
            .then(() => {
                setMessage("Registration successfull! Proceed to sign-in.");
                setMessageType("success");
            })
            .catch(() => {
                setMessage("Connection error");
                setMessageType("error");
            });
    };
    return (
        <div className="coverPhoto pt-4">
            <Card hoverable className="col-lg-6 mx-auto">
                <Typography.Title level={1} className="text-center">
                    CONTACT MANAGER
                </Typography.Title>
                <Divider>SIGN-UP</Divider>
                <div className="col-lg-6 mx-auto">
                    <UserAccountForm
                        formType="Sign up"
                        handleForm={handleForm}
                    />
                    {message && (
                        <Alert message={message} type={messageType} closable />
                    )}
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
