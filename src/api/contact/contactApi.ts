import {
    CONTACT_DELETE,
    CONTACT_GET,
    CONTACT_POST,
    CONTACT_PUT,
} from "../../constants/apiConstant";
import updatetUrlWithId from "../../utils/updatetUrlWithId";
import axios from "../axiosConfig";
import setHeader from "../utils/setHeader";

export const getAllContacts = async (token: string) => {
    try {
        const response = await axios.get(CONTACT_GET, setHeader(token));
        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) throw error.response.data;
        else throw error;
    }
};

export const insertContact = async (token: string, newContact: FormData) => {
    try {
        const response = await axios.post(
            CONTACT_POST,
            newContact,
            setHeader(token)
        );

        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) throw error.response.data;
        else throw error;
    }
};

export const updateContact = async (
    token: string,
    contactId: number,
    newContact: FormData
) => {
    try {
        const response = await axios.put(
            updatetUrlWithId(CONTACT_PUT, contactId),
            newContact,
            setHeader(token)
        );

        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) throw error.response.data;
        else throw error;
    }
};

export const deleteContact = async (token: string, contactId: number) => {
    try {
        const response = await axios.delete(
            updatetUrlWithId(CONTACT_DELETE, contactId),
            setHeader(token)
        );

        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) throw error.response.data;
        else throw error;
    }
};
