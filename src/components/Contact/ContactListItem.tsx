import { HeartTwoTone } from "@ant-design/icons";
import { Avatar, List } from "antd";
import ContactInterface from "../../interfaces/ContactInterface";
import { getThumbnailUrl } from "../../utils/getImageUrl";

interface Props {
    listItem: ContactInterface;
    onClickEventHandler: React.Dispatch<
        React.SetStateAction<ContactInterface | undefined>
    >;
}

const ContactListItem = ({ listItem, onClickEventHandler }: Props) => {
    return (
        <List.Item
            key={listItem.email}
            onClick={() => onClickEventHandler(listItem)}
        >
            <List.Item.Meta
                avatar={
                    <Avatar
                        src={getThumbnailUrl(listItem.photoUrl)}
                        alt="Profile"
                    />
                }
                title={listItem.name}
                description={listItem.phone}
            />
            {listItem.favourite && <HeartTwoTone />}
        </List.Item>
    );
};

export default ContactListItem;
