import { Alert, Modal, Typography } from "antd";
import { useContext, useState } from "react";
import { deleteContact } from "../../api/contact/contactApi";
import { REFRESH } from "../../constants/apiConstant";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { ContactContext } from "../../contexts/ContactContext";
import AuthenticationInterface from "../../interfaces/AuthenticationInterface";
import ContactInterface, {
    ContactContextInterface,
} from "../../interfaces/ContactInterface";

interface Props {
    contact: ContactInterface;
}

const ContactDeleteModal = ({ contact }: Props) => {
    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;
    const { contactDispatch } = useContext(
        ContactContext
    ) as ContactContextInterface;

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleDelete = () => {
        setLoading(true);
        setVisible(false);

        deleteContact(token, contact.id)
            .then(() => {
                setLoading(false);
                setVisible(false);
                contactDispatch({
                    type: REFRESH,
                });
            })
            .catch((error) => {
                setAlertMessage(error.message);
                setLoading(false);
            });
    };

    return (
        <div>
            <Typography.Text type="danger" onClick={() => setVisible(true)}>
                Delete
            </Typography.Text>
            <Modal
                title="Vertically centered modal dialog"
                centered
                visible={visible}
                onOk={handleDelete}
                onCancel={() => setVisible(false)}
                maskClosable={false}
                okButtonProps={{ loading: loading }}
            >
                <Typography.Paragraph>
                    Contact: <strong>{contact.name} will be deleted</strong>
                </Typography.Paragraph>
                {alertMessage && (
                    <Alert type="error" description={alertMessage} />
                )}
            </Modal>
        </div>
    );
};

export default ContactDeleteModal;
