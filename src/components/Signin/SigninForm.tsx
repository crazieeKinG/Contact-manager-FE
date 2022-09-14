import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinApiHandler } from "../../api/authentication/authenticationApi";
import { ROUTES } from "../../constants";

const SigninForm = () => {
    const { Item } = Form;

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = (values: any) => {
        setLoading(true);

        console.log(values);
        signinApiHandler(values)
            .then(() => {
                navigate(ROUTES.HOME);
            })
            .catch((response) => {
                setLoading(false);
                setAlertMessage(response.message);
            });
    };

    return (
        <Form onFinish={handleSubmit}>
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

            {alertMessage && (
                <Alert message={alertMessage} type="error" closable className="my-2"/>
            )}

            <Item className="text-center">
                <Button
                    type="primary"
                    htmlType="submit"
                    className="col-6 mt-2"
                    loading={loading}
                >
                    Sign in
                </Button>
            </Item>
        </Form>
    );
};

export default SigninForm;
