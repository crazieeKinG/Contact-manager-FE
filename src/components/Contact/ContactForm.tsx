import { UploadOutlined } from "@ant-design/icons";
import {
    Alert,
    Button,
    Checkbox,
    Col,
    Form,
    Image,
    Input,
    Select,
    Upload,
} from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertContact, updateContact } from "../../api/contact/contactApi";
import { ROUTES } from "../../constants";
import { ERROR, REFRESH } from "../../constants/apiConstant";
import {
    DEFAULT_FORM_RULE,
    FORM_LABEL_SIZE,
} from "../../constants/formConstant";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { ContactContext } from "../../contexts/ContactContext";
import AuthenticationInterface from "../../interfaces/AuthenticationInterface";
import ContactInterface, {
    ContactContextInterface,
} from "../../interfaces/ContactInterface";
import formatContactData from "../../utils/formatContactData";

interface Props {
    defaultContactData?: ContactInterface;
}

const ContactForm = ({ defaultContactData }: Props) => {
    const initialValues = {
        name: defaultContactData?.name,
        phone: defaultContactData?.phone,
        phoneType: defaultContactData?.phoneType,
        email: defaultContactData?.email,
        address: defaultContactData?.address,
        favourite: defaultContactData?.favourite,
    };

    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;
    const { allData, contactDispatch } = useContext(
        ContactContext
    ) as ContactContextInterface;

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [phoneType, setPhoneType] = useState(
        defaultContactData ? defaultContactData?.phoneType : "mobile"
    );

    const handleForm = (values: any) => {
        setLoading(true);

        const formattedData = formatContactData({
            ...values,
            phoneType: phoneType,
        });

        if (defaultContactData) {
            updateContact(token, defaultContactData.id, formattedData)
                .then(() => {
                    contactDispatch({
                        type: REFRESH,
                    });
                    navigate(ROUTES.HOME);
                })
                .catch((error) => {
                    contactDispatch({
                        type: ERROR,
                        message: error.message,
                    });
                    setLoading(false);
                });
        } else {
            insertContact(token, formattedData)
                .then(() => {
                    contactDispatch({
                        type: REFRESH,
                    });
                    navigate(ROUTES.HOME);
                })
                .catch((error) => {
                    contactDispatch({
                        type: ERROR,
                        message: error.message,
                    });
                    setLoading(false);
                });
        }
    };

    return (
        <Form
            className="mx-auto mt-4"
            labelCol={FORM_LABEL_SIZE}
            labelAlign="left"
            onFinish={handleForm}
            initialValues={initialValues}
        >
            <Form.Item label="Name" name="name" rules={DEFAULT_FORM_RULE}>
                <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item label="Phone number" required>
                <Input.Group compact>
                    <Form.Item name="phone" rules={DEFAULT_FORM_RULE}>
                        <Input type="number" placeholder="Phone number" />
                    </Form.Item>
                    <Select
                        defaultValue={phoneType}
                        onChange={(value) => setPhoneType(value)}
                    >
                        <Select.Option value="mobile">Mobile</Select.Option>
                        <Select.Option value="work">Work</Select.Option>
                        <Select.Option value="home">Home</Select.Option>
                    </Select>
                </Input.Group>
            </Form.Item>
            <Form.Item label="Email address" name="email">
                <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item label="Address" name="address">
                <Input placeholder="Address number" />
            </Form.Item>
            {defaultContactData?.photoUrl && (
                <Col offset={6} className="mb-2">
                    <Image
                        className="border"
                        width={100}
                        src={defaultContactData?.photoUrl}
                    />
                </Col>
            )}
            <Form.Item label="Profile picture" name="photo">
                <Upload
                    beforeUpload={() => false}
                    listType="picture"
                    maxCount={1}
                    fileList={undefined}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item
                label="Favourite"
                name="favourite"
                valuePropName="checked"
            >
                <Checkbox />
            </Form.Item>
            {allData.status === ERROR && (
                <Col offset={6}>
                    <Alert
                        closable
                        type="error"
                        description={allData.message}
                    />
                </Col>
            )}
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;
