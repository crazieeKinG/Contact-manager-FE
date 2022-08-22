import { Button, Card, Popover, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useState } from "react";
import { deleteContact } from "../../reducers/slices/contactSlice";
import { useDispatch } from "react-redux";
import IContact from "../../domain/IContact";
import { Link } from "react-router-dom";
import { UPDATE_CONTACT } from "../../constants/routesConstants";

interface Props {
    setSelectedData: React.Dispatch<React.SetStateAction<IContact | null>>;
    data: { id: number; name: string; phone: number };
}

const ContactCard = (props: Props) => {
    const dispatch = useDispatch();
    const data = props.data;
    const [visible, setVisible] = useState(false);

    const hide = () => {
        setVisible(false);
    };

    const handleVisibleChange = (newVisible: boolean) => {
        setVisible(newVisible);
    };

    const deleteItem = () => {
        dispatch(deleteContact(data.id));
        props.setSelectedData(null);
    };

    return (
        <Card
            hoverable
            className="col-lg-8 mx-auto my-4"
            cover={
                <img alt="example" src="https://joeschmoe.io/api/v1/random" />
            }
            actions={[
                <Link to={UPDATE_CONTACT.replace(":id", data.id.toString())}>
                    <EditOutlined key="edit" />
                </Link>,
                <Popover
                    content={
                        <Space>
                            <Button
                                type="primary"
                                danger={true}
                                onClick={deleteItem}
                            >
                                Yes
                            </Button>
                            <Button onClick={hide}>Cancel</Button>
                        </Space>
                    }
                    title="Are you sure?"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                >
                    <DeleteOutlined key="delete" />
                </Popover>,
            ]}
        >
            <Meta title={data.name} description={`${data.phone}`} />
        </Card>
    );
};

export default ContactCard;
