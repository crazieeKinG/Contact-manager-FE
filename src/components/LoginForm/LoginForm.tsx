import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { DEFAULT_FORM_RULE } from "../../constants/formConstants";

type Props = {
    formType: string;
    handleForm: (values: any) => void;
};

const LoginForm = (props: Props) => {
    const { Item } = Form;

    return (
        <Form onFinish={props.handleForm}>
            <Item name="email" rules={DEFAULT_FORM_RULE}>
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
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
            <Item className="text-center">
                <Button type="primary" htmlType="submit" className="col-6 mt-2">
                    {props.formType}
                </Button>
            </Item>
        </Form>
    );
};

export default LoginForm;
