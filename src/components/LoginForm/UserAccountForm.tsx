import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { DEFAULT_FORM_RULE } from "../../constants/formConstants";

type Props = {
    formType: string;
    handleForm: (values: any) => void;
};

const UserAccountForm = (props: Props) => {
    const { Item } = Form;

    return (
        <Form onFinish={props.handleForm}>
            {props.formType === "Sign up" && (
                <Item name="username" rules={DEFAULT_FORM_RULE}>
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Item>
            )}
            <Item name="email" rules={DEFAULT_FORM_RULE}>
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email address"
                    type={"email"}
                />
            </Item>
            <Item name="password" rules={DEFAULT_FORM_RULE}>
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Item>
            {props.formType === "Sign up" && (
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
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
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
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Confirm Password"
                    />
                </Item>
            )}
            <Item className="text-center">
                <Button type="primary" htmlType="submit" className="col-6 mt-2">
                    {props.formType}
                </Button>
            </Item>
        </Form>
    );
};

export default UserAccountForm;
