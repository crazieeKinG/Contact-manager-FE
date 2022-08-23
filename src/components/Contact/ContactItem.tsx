import { HeartTwoTone } from "@ant-design/icons";
import { Avatar, List } from "antd";
import IContact from "../../domain/IContact";

interface Props {
    index: number;
    item: IContact;
    displayData: (index: number) => void;
}

const ContactItem = (props: Props) => {
    const displayData = props.displayData;
    const index = props.index;
    const item = props.item;

    const thumbnailUrl = item.photoUrl.replace(
        "upload",
        "upload/c_thumb,w_200,g_face"
    );

    return (
        <List.Item
            className="contact__list__item"
            onClick={() => {
                displayData(index);
            }}
            id={`${index}`}
        >
            <List.Item.Meta
                key={`${index}`}
                avatar={<Avatar src={thumbnailUrl} size={60} />}
                title={item.name}
                description={item.phone}
            />
            {item.favourite && <HeartTwoTone />}
        </List.Item>
    );
};

export default ContactItem;
