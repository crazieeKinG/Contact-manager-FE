import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/Contact/ContactForm";
import CustomModal from "../../components/Modal/CustomModal";
import IContact from "../../domain/IContact";
import {
    setRefresh,
    setSelectedContact,
} from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { formatContactData, setHeader } from "../../utils/common";

interface Props {
    id: string;
}

const UpdateContact = ({ id }: Props) => {
    const [initialValue, setInitialValue] = useState<IContact>();
    const contactData = useSelector((state: RootState) => state.contacts.data);
    const selectedData = contactData.filter(
        (contact) => contact.id.toString() === id
    );

    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const showModal = () => {
        setInitialValue(selectedData[0]);
        setVisible(true);
    };

    const handleForm = (values: any) => {
        const formatedData = formatContactData(values);
        setLoading(true);
        axios
            .put(`/contacts/${id}`, formatedData, setHeader(token))
            .then(() => {
                setLoading(false);
                setVisible(false);
                dispatch(setRefresh(true));
                dispatch(setSelectedContact(null));
            });
    };

    return (
        <div>
            <Button
                type="primary"
                icon={<EditOutlined />}
                size="large"
                onClick={showModal}
            >
                Edit
            </Button>
            <CustomModal visible={visible} setVisible={setVisible}>
                <ContactForm
                    defaultContactData={initialValue}
                    handleForm={handleForm}
                    loading={loading}
                />
            </CustomModal>
        </div>
    );
};

export default UpdateContact;
