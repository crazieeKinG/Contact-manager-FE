import { Card, Col, Divider } from "antd";
import ContactForm from "../../components/Contact/ContactForm";

const NewContact = () => {
    return (
            <Col span={12}>
                <Card className="rounded shadow">
                    <h3 className="text-info font-kalam">Add new contact</h3>
                    <Divider />
                    <ContactForm />
                </Card>
            </Col>
    );
};

export default NewContact;
