import {
    CloseOutlined,
    DeleteOutlined,
    EditOutlined,
    HeartTwoTone,
} from "@ant-design/icons";
import {
    Avatar,
    Button,
    Card,
    Col,
    Descriptions,
    Divider,
    Dropdown,
    Menu,
    Row,
    Space,
    Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import ContactInterface from "../../interfaces/ContactInterface";
import updatetUrlWithId from "../../utils/updatetUrlWithId";
import ContactDeleteModal from "./ContactDeleteModal";

interface Props {
    data: ContactInterface;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactCard = ({ data, setVisible }: Props) => {
    const navigate = useNavigate();
    const menu = (
        <Menu
            items={[
                {
                    label: "Edit",
                    key: "1",
                    icon: <EditOutlined />,
                    className: "text-info",
                    onClick: () => {
                        navigate(
                            updatetUrlWithId(ROUTES.EDIT_CONTACT, data.id)
                        );
                    },
                },
                {
                    key: "3",
                    label: <ContactDeleteModal contact={data} />,
                    icon: <DeleteOutlined />,
                    className: "text-danger",
                },
            ]}
        />
    );

    return (
        <Card>
            <Row justify="end" align="middle">
                <Space>
                    <Dropdown.Button
                        overlay={menu}
                        className="border-none"
                    ></Dropdown.Button>
                    <Button
                        onClick={() => {
                            setVisible(false);
                        }}
                        icon={<CloseOutlined />}
                        danger
                    ></Button>
                </Space>
            </Row>
            <Row>
                <Col span={24} className="text-center">
                    <Avatar
                        src={data.photoUrl}
                        size={200}
                        className="border"
                        shape="circle"
                    />
                    <Divider className="text-info border-dark">
                        {data.name}&nbsp; {data.favourite && <HeartTwoTone />}
                    </Divider>
                </Col>
            </Row>
            <Descriptions title="Full information" column={2}>
                <Descriptions.Item
                    label="Name"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    {data.name} &nbsp; {data.favourite && <HeartTwoTone />}
                </Descriptions.Item>
                <Descriptions.Item
                    label={`Phone number (${data.phoneType})`}
                    labelStyle={{ fontWeight: "bold" }}
                >
                    <Typography.Text copyable>{data.phone}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item
                    label="Email address"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    {data.email}
                </Descriptions.Item>
                <Descriptions.Item
                    label="Address"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    {data.address}
                </Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default ContactCard;
