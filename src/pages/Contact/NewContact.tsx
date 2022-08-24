import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, notification, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/Contact/ContactForm";
import CustomModal from "../../components/Modal/CustomModal";
import NotificationButton from "../../components/Notification/NotificationButton";
import { LOGOUT } from "../../constants/routesConstants";
import {
    setRefresh,
    setSelectedContact,
} from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import {
    formatContactData,
    openNotification,
    setHeader,
} from "../../utils/common";

const NewContact = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );

    const showModal = () => {
        setVisible(true);
    };

    const handleForm = (values: any) => {
        const formatedData = formatContactData(values);
        setLoading(true);
        axios
            .post("/contacts", formatedData, setHeader(token))
            .then(() => {
                setLoading(false);
                setVisible(false);
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
        <div>
            <Row className="mt-3 mx-3" justify="end">
                <Col>
                    <Button
                        icon={<PlusOutlined />}
                        type="primary"
                        onClick={showModal}
                    >
                        New Contact
                    </Button>
                </Col>
            </Row>
            <CustomModal visible={visible} setVisible={setVisible}>
                <ContactForm handleForm={handleForm} loading={loading} />
            </CustomModal>
        </div>
    );
};

export default NewContact;
