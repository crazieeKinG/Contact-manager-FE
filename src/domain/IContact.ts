interface IContact {
    id: number;
    name: string;
    phone: number;
    favourite: boolean;
}

export type IContactToInsert = Omit<IContact, "id">;

export default IContact;
