import { Card, Col, Divider } from "antd";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../../components/Contact/ContactForm";
import { ContactContext } from "../../contexts/ContactContext";
import { ContactStateInterface } from "../../interfaces/ContactInterface";

const EditContact = () => {
    const contactId = useParams().id;

    const { allContacts } = useContext(ContactContext)
        ?.allData as ContactStateInterface;

    const selectedContact = allContacts.filter(
        (contact) => contact.id.toString() === contactId
    )[0];

    return (
        <Col span={12}>
            <Card className="rounded shadow">
                <h3 className="text-info font-kalam">
                    Edit contact - {contactId}
                </h3>
                <Divider />
                <ContactForm defaultContactData={selectedContact} />
            </Card>
        </Col>
    );
};

export default EditContact;
