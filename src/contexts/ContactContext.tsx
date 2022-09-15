import { createContext, useReducer } from "react";
import { PENDING } from "../constants/apiConstant";
import ContactInterface, {
    ContactContextInterface,
    ContactStateInterface,
} from "../interfaces/ContactInterface";
import ContextProviderPropsInterface from "../interfaces/ContextProviderPropsInterface";
import contactReducer from "../reducers/contactReducer";

export const ContactContext = createContext<
    ContactContextInterface | undefined
>(undefined);

const ContactContextProvider = ({
    children,
}: ContextProviderPropsInterface) => {
    const initialData: ContactStateInterface = {
        allContacts: [] as ContactInterface[],
        status: PENDING,
        message: "",
        refresh: true
    };
    
    const [allData, contactDispatch] = useReducer(contactReducer, initialData);

    return (
        <ContactContext.Provider value={{ allData, contactDispatch }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;
