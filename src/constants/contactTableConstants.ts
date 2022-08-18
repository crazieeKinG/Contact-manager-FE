import { ColumnsType } from "antd/lib/table";
import IContact from "../domain/IContact";

export const CONTACT_TABLE_COLUMNS: ColumnsType<IContact> = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => (a.name > b.name ? -1 : 1),
        ellipsis: true,
    },
    {
        title: "Phone number",
        dataIndex: "phone",
        sorter: (a, b) => a.phone - b.phone,
    },
];
