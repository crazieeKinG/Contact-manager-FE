import { createContext, useState } from "react";
import AuthenticationInterface, {
    AuthenticationContextInterface,
} from "../interfaces/AuthenticationInterface";
import ContextProviderPropsInterface from "../interfaces/ContextProviderPropsInterface";

export const AuthenticationContext = createContext<
    AuthenticationContextInterface | undefined
>(undefined);

export const AuthenticationContextProvider = ({ children }: ContextProviderPropsInterface) => {
    const initialState: AuthenticationInterface = {
        username: "",
        token: "",
    };
    const [auth, setAuth] = useState<AuthenticationInterface>(initialState);

    return (
        <AuthenticationContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
