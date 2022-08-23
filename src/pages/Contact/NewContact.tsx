import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/Contact/ContactForm";
import CustomModal from "../../components/Modal/CustomModal";
import {
    setRefresh,
    setSelectedContact,
} from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { formatContactData, setHeader } from "../../utils/common";

const NewContact = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );

    const showModal = () => {
        setVisible(true);
    };

    const handleForm = (values: any) => {
        const formatedData = formatContactData(values);
        setLoading(true);
        axios.post("/contacts", formatedData, setHeader(token)).then(() => {
            setLoading(false);
            setVisible(false);
            dispatch(setRefresh(true));
            dispatch(setSelectedContact(null));
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
