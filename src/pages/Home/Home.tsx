import { useContext, useEffect, useState } from "react";
import ContactList from "../../components/Contact/ContactList";
import ContactInterface, {
    ContactContextInterface,
} from "../../interfaces/ContactInterface";
import SearchForm from "../../components/Search/SearchForm";
import { Button, Card, Col, Row, Tooltip } from "antd";
import { SEARCH_FIELD_TYPE } from "../../interfaces/types";
import { PlusOutlined } from "@ant-design/icons";
import ContactCard from "../../components/Contact/ContactCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { ContactContext } from "../../contexts/ContactContext";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import AuthenticationInterface from "../../interfaces/AuthenticationInterface";
import { getAllContacts } from "../../api/contact/contactApi";
import { ERROR, PENDING, SUCCESS } from "../../constants/apiConstant";

const Home = () => {
    const { allData, contactDispatch } = useContext(
        ContactContext
    ) as ContactContextInterface;
    const { allContacts } = allData;
    const { token } = useContext(AuthenticationContext)
        ?.auth as AuthenticationInterface;

    const [data, setData] = useState(allContacts);
    const [searchField, setSearchField] = useState<SEARCH_FIELD_TYPE>("name");
    const [selectedContact, setSelectedContact] = useState<ContactInterface>();
    const [visibleContact, setVisibleContact] = useState(false);

    useEffect(() => {
        contactDispatch({
            type: PENDING,
            message: "Fetching contacts...",
        });
        if (allData.refresh) {
            setVisibleContact(false);
            setSelectedContact(undefined);
            getAllContacts(token)
                .then((response) => {
                    const { data, message } = response;

                    contactDispatch({
                        type: SUCCESS,
                        payload: data,
                        message: message,
                    });

                    setData(data);
                })
                .catch((error) => {
                    const { message } = error;

                    contactDispatch({
                        type: ERROR,
                        message: message,
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allData.refresh]);

    useEffect(() => {
        if (selectedContact) setVisibleContact(true);
    }, [selectedContact]);

    const contactLength = data.length;

    const handleSearchField = (optionValue: string) => {
        const field: SEARCH_FIELD_TYPE = optionValue as SEARCH_FIELD_TYPE;
        setSearchField(field);
    };

    const searchHandle = (event: any) => {
        const searchValue = event.target.value;
        
        const filteredData = allContacts.filter((eachData) =>
            eachData[searchField]
                .toString()
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );
        setData(filteredData);
    };

    return (
        <Row align="middle" justify="space-between">
            <Col span={10}>
                <Card className="shadow rounded">
                    <SearchForm
                        placeholder={`Search - ${contactLength} contacts`}
                        searchHandler={searchHandle}
                        searchFieldHandler={handleSearchField}
                    />
                    <ContactList
                        data={data}
                        selectedHandler={setSelectedContact}
                    />
                </Card>
            </Col>
            <Col span={1}>
                <Link to={ROUTES.ADD_CONTACT}>
                    <Tooltip title="New contact">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<PlusOutlined />}
                            size="large"
                        />
                    </Tooltip>
                </Link>
            </Col>
            <Col span={12}>
                {visibleContact && (
                    <ContactCard
                        data={selectedContact as ContactInterface}
                        setVisible={setVisibleContact}
                    />
                )}
            </Col>
        </Row>
    );
};

export default Home;
