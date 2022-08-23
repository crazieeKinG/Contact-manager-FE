import { Avatar, Descriptions, Space } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

import IContact from "../../domain/IContact";
import ContactAction from "./ContactAction";

interface Props {
    data: IContact;
}

const ContactCard = (props: Props) => {
    const data = props.data;
    const thumbnailUrl = data.photoUrl.replace(
        "upload",
        "upload/c_thumb,w_200,g_face"
    );

    return (
        <Space
            direction="vertical"
            className="col-6"
            style={{ marginLeft: "1rem" }}
        >
            <Avatar
                src={thumbnailUrl}
                size={150}
                className="border"
                shape="square"
            />
            <Descriptions title="Contact Info" column={1}>
                <Descriptions.Item
                    label="Name"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    {data.name} &nbsp; {data.favourite && <HeartTwoTone />}
                </Descriptions.Item>
                <Descriptions.Item
                    label="Phone number"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    {data.phone}
                </Descriptions.Item>
            </Descriptions>
            <ContactAction contactId={data.id.toString()} />
        </Space>
    );
};

export default ContactCard;
