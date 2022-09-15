import { API_STATUS } from "../constants/apiConstant";

interface ContactInterface {
    id: number;
    name: string;
    phone: number;
    phoneType: string;
    email: string;
    address: string;
    favourite: boolean;
    photoUrl: string;
}

export default ContactInterface;

export interface ContactStateInterface {
    allContacts: ContactInterface[];
    status: string;
    message: string;
    refresh: boolean;
}

export interface ContactContextInterface {
    allData: ContactStateInterface;
    contactDispatch: React.Dispatch<ContactReducerActionInterface>;
}

export interface ContactReducerActionInterface {
    type: API_STATUS;
    payload?: ContactInterface[];
    message?: string;
    refresh?: boolean;
}
