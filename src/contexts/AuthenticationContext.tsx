import { createContext, useState } from "react";
import AuthenticationInterface, {
    AuthenticationContextInterface,
} from "../interfaces/AuthenticationInterface";
import ContextProviderPropsInterface from "../interfaces/ContextProviderPropsInterface";
import { getCookie } from "../utils/handleCookie";

export const AuthenticationContext = createContext<
    AuthenticationContextInterface | undefined
>(undefined);

export const AuthenticationContextProvider = ({
    children,
}: ContextProviderPropsInterface) => {
    const getCookieData = getCookie();
    const initialState: AuthenticationInterface = {
        username: getCookieData.username,
        token: getCookieData.token,
    };
    
    const [auth, setAuth] = useState<AuthenticationInterface>(initialState);

    return (
        <AuthenticationContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
