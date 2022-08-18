import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/Contact/ContactForm";
import { HOME } from "../../constants/routesConstants";
import { addContact } from "../../reducers/slices/contactSlice";

const NewContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (values: any) => {
        const formatedData = { ...values, favourite: !!values.favourite };
        dispatch(addContact(formatedData));
        navigate(HOME);
    };

    return (
        <div>
            <ContactForm handleForm={handleForm} />
        </div>
    );
};

export default NewContact;
