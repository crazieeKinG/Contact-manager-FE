import { Layout, Menu, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import ContactList from "../../components/Contact/ContactList";
import { LOGOUT } from "../../constants/routesConstants";
import IContact from "../../domain/IContact";

const Home = () => {
    const data: IContact[] = [
        {
            id: 1,
            name: "Saajan Shrestha",
            phone: 98510075,
        },
        {
            id: 1,
            name: "Amish SHrestha",
            phone: 985100675,
        },
        {
            id: 1,
            name: "John Brown",
            phone: 985106475,
        },
        {
            id: 1,
            name: "Sagar Thapa",
            phone: 9851006475,
        },
        {
            id: 1,
            name: "Ujjwal Khanal",
            phone: 95100675,
        },
    ];

    return (
        <Layout>
            <Header className="col-12">
                <div className="row justify-content-between">
                    <Typography.Text className="col-4 text-light align-middle">
                        CONTACT MANAGER
                    </Typography.Text>
                    <Menu
                        className="col-4 justify-content-end "
                        theme="dark"
                        mode="horizontal"
                        items={[
                            {
                                key: "newContact",
                                label: (
                                    <Link
                                        to=""
                                        className="text-decoration-none"
                                    >
                                        New Contact
                                    </Link>
                                ),
                            },
                            {
                                key: "Logout",
                                label: (
                                    <Link
                                        to={LOGOUT}
                                        className="text-decoration-none"
                                    >
                                        Logout
                                    </Link>
                                ),
                            },
                        ]}
                    />
                </div>
            </Header>
            <Content>
                <ContactList data={data} />
            </Content>
        </Layout>
    );
};

export default Home;
