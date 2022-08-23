import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import {
    DEFAULT_FORM_RULE,
    FORM_LABEL_SIZE,
} from "../../constants/formConstants";
import IContact from "../../domain/IContact";

interface Props {
    defaultContactData?: IContact;
    handleForm: (values: any) => void;
    loading: boolean;
}

const ContactForm = (props: Props) => {
    const { Item } = Form;

    return (
        <Form
            className="mx-auto mt-4"
            labelCol={FORM_LABEL_SIZE}
            labelAlign="left"
            onFinish={props.handleForm}
            initialValues={props.defaultContactData}
        >
            <Item label="Name" name="name" rules={DEFAULT_FORM_RULE}>
                <Input placeholder="Full name" />
            </Item>
            <Item label="Phone number" name="phone" rules={DEFAULT_FORM_RULE}>
                <Input placeholder="Phone number" />
            </Item>
            <Item label="Profile picture" name="photo">
                <Upload
                    beforeUpload={() => false}
                    listType="picture"
                    maxCount={1}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Item>
            <Item label="Favourite" name="favourite" valuePropName="checked">
                <Checkbox />
            </Item>
            <Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={props.loading}
                >
                    Save
                </Button>
            </Item>
        </Form>
    );
};

export default ContactForm;
