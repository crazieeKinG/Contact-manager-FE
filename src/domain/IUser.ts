interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
}

export type ISignIn = Omit<IUser, "id" | "username">;

export default IUser;
