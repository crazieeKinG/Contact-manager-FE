interface AuthenticationInterface {
    username: string;
    token: string;
}

export interface AuthenticationContextInterface {
    auth: AuthenticationInterface;
    setAuth: React.Dispatch<
        React.SetStateAction<AuthenticationInterface>
    >;
}

export default AuthenticationInterface;
