import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";

interface Props {
    placeholder: string;
    searchHandler: (event: any) => void;
    searchFieldHandler: (optionValue: string) => void;
}

const SearchForm = ({
    placeholder,
    searchHandler,
    searchFieldHandler,
}: Props) => {
    return (
        <Input.Group compact className="my-2">
            <Select defaultValue="name" onChange={searchFieldHandler}>
                <Select.Option value="name">Name</Select.Option>
                <Select.Option value="phone">Phone number</Select.Option>
                <Select.Option value="email">Email</Select.Option>
                <Select.Option value="address">Address</Select.Option>
            </Select>
            <Input
                prefix={<SearchOutlined />}
                className="bg-grey border-bottom col-8 mx-2"
                placeholder={placeholder}
                onChange={searchHandler}
                bordered={false}
            />
        </Input.Group>
    );
};

export default SearchForm;
