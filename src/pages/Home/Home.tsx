import { useSelector } from "react-redux";
import ContactList from "../../components/Contact/ContactList";
import IContact from "../../domain/IContact";
import { RootState } from "../../reducers/store";

const Home = () => {
    const data = useSelector((state: RootState) => state.contacts.data);

    return <ContactList data={data} />;
};

export default Home;
