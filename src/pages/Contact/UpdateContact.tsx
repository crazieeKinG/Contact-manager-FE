import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../../components/Contact/ContactForm";
import { HOME } from "../../constants/routesConstants";
import { updateContact } from "../../reducers/slices/contactSlice";
import { RootState } from "../../reducers/store";

const UpdateContact = () => {
    const { id } = useParams();
    const contactData = useSelector((state: RootState) => state.contacts.data);
    const selectedData = contactData.filter(
        (contact) => contact.id.toString() === id
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (values: any) => {
        const formatedData = {
            ...values,
            favourite: !!values.favourite,
            id: +(id as string),
        };

        dispatch(updateContact(formatedData));
        navigate(HOME);
    };

    return (
        <div>
            <ContactForm
                defaultContactData={selectedData[0]}
                handleForm={handleForm}
            />
        </div>
    );
};

export default UpdateContact;
