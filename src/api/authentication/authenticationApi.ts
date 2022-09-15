import { API } from "../../constants";
import SigninInterface from "../../interfaces/SigninInterface";
import SignupInterface from "../../interfaces/SignupInterface";
import axios from "../axiosConfig";

export const signinApiHandler = async (signinCredentials: SigninInterface) => {
    try {
        const response = await axios.post(API.SIGN_IN, signinCredentials);

        return response.data;
    } catch (error: any) {
        if (error.response.status === 401) throw error.response.data;
        else throw error;
    }
};

export const signupApiHandler = async (signupCredentials: SignupInterface) => {
    try {
        const response = await axios.post(API.SIGN_UP, signupCredentials);
        
        return response.data;
    } catch (error: any) {
        if (error.response.status) throw error.response.data;
        else throw error;
    }
};
