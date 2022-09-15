import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form } from "antd";
import Input from "antd/lib/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApiHandler } from "../../api/authentication/authenticationApi";
import { ROUTES } from "../../constants";
import { ALERT_TYPE } from "../../interfaces/types";

const SignupForm = () => {
    const { Item } = Form;

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [alertType, setAlertType] = useState<ALERT_TYPE>("error");
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = (values: any) => {
        setLoading(true);
        delete values.confirm;

        signupApiHandler(values)
            .then((response) => {
                setAlertType("success");
                setAlertMessage(
                    `${response.message} - Redirecting to signin portal...`
                );
                setTimeout(() => {
                    navigate(ROUTES.SIGN_IN);
                }, 5000);
            })
            .catch((response) => {
                setAlertType("error");
                setLoading(false);
                setAlertMessage(response.message);
            });
    };

    return (
        <Form onFinish={handleSubmit}>
            <Item name="username">
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Item>

            <Item name="email">
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email address"
                    type={"email"}
                />
            </Item>
            <Item name="password">
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Item>

            <Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("Passwords do not match!")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Confirm Password"
                />
            </Item>

            {alertMessage && (
                <Alert
                    message={alertMessage}
                    type={alertType}
                    closable
                    className="my-2"
                />
            )}

            <Item className="text-center">
                <Button
                    type="primary"
                    htmlType="submit"
                    className="col-6 mt-2"
                    loading={loading}
                >
                    Sign up
                </Button>
            </Item>
        </Form>
    );
};

export default SignupForm;
