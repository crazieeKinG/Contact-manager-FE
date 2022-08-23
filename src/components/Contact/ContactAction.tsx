import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Space } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateContact from "../../pages/Contact/UpdateContact";
import {
    setRefresh,
    setSelectedContact,
} from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { setHeader } from "../../utils/common";

interface Props {
    contactId: string;
}

const ContactAction = (props: Props) => {
    const dispatch = useDispatch();
    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const hide = () => {
        setVisible(false);
    };

    const handleVisibleChange = (newVisible: boolean) => {
        setVisible(newVisible);
    };

    const deleteItem = (id: string) => {
        setLoading(true);
        axios.delete(`/contacts/${id}`, setHeader(token)).then(() => {
            setLoading(false);
            dispatch(setRefresh(true));
            dispatch(setSelectedContact(null));
        });
    };
    return (
        <Space>
            <UpdateContact id={props.contactId} />
            <Popover
                content={
                    <Space>
                        <Button
                            type="primary"
                            danger={true}
                            onClick={() => deleteItem(props.contactId)}
                            loading={loading}
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
                <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    danger
                    size="large"
                >
                    Delete
                </Button>
            </Popover>
        </Space>
    );
};

export default ContactAction;
