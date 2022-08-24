import { DeleteOutlined } from "@ant-design/icons";
import { Button, notification, Popover, Space } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/routesConstants";
import UpdateContact from "../../pages/Contact/UpdateContact";
import {
    setRefresh,
    setSelectedContact,
} from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { openNotification, setHeader } from "../../utils/common";
import NotificationButton from "../Notification/NotificationButton";

interface Props {
    contactId: string;
}

const ContactAction = (props: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        axios
            .delete(`/contacts/${id}`, setHeader(token))
            .then(() => {
                setLoading(false);
                dispatch(setRefresh(true));
                dispatch(setSelectedContact(null));
            })
            .catch((error) => {
                const status = error.response.status;
                status === 401
                    ? openNotification(
                          "Invalid Token!",
                          "User token has expired, sign-in to continue!",
                          <NotificationButton
                              buttonTitle="Sign in"
                              buttonFunction={() => {
                                  notification.close("notification");
                                  navigate(LOGOUT);
                              }}
                          />
                      )
                    : openNotification(
                          "Connection Error! ",
                          "Cannot connect to server",
                          <NotificationButton
                              buttonTitle="Refresh"
                              buttonFunction={() => window.location.reload()}
                          />
                      );
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
