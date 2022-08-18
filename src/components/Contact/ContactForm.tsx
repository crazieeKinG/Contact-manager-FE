import { Button, Checkbox, Form, Input } from "antd";
import {
    DEFAULT_FORM_RULE,
    FORM_LABEL_SIZE,
} from "../../constants/formConstants";

interface Props {
    handleForm: (values: any) => void;
}

const ContactForm = (props: Props) => {
    const { Item } = Form;

    return (
        <Form
            className="col-lg-6 mx-auto mt-4"
            labelCol={FORM_LABEL_SIZE}
            labelAlign="left"
            onFinish={props.handleForm}
        >
            <Item label="Name" name="name" rules={DEFAULT_FORM_RULE}>
                <Input placeholder="Full name" />
            </Item>
            <Item label="Phone number" name="phone" rules={DEFAULT_FORM_RULE}>
                <Input placeholder="Phone number" />
            </Item>
            <Item label="Favourite" name="favourite" valuePropName="checked">
                <Checkbox />
            </Item>
            <Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Item>
        </Form>
    );
};

export default ContactForm;
