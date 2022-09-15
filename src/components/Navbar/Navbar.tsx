import { DownOutlined, LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Menu, Row } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../../constants";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import AuthenticationInterface, {
    AuthenticationContextInterface,
} from "../../interfaces/AuthenticationInterface";

const Navbar = () => {
    const { auth, setAuth } = useContext(
        AuthenticationContext
    ) as AuthenticationContextInterface;
    const { username } = auth as AuthenticationInterface;

    const navigate = useNavigate();

    const menu = (
        <Menu
            items={[
                {
                    label: "New contact",
                    key: "1",
                    icon: <PlusOutlined />,
                },
                {
                    label: "Sign out",
                    key: "2",
                    icon: <LogoutOutlined />,
                    onClick: () => {
                        setAuth({
                            username: "",
                            token: "",
                        });
                        navigate(ROUTES.SIGN_IN);
                    },
                },
            ]}
        />
    );

    return (
        <div>
            <Row justify="space-between" align="middle" className="mb-3">
                <Col>
                    <Link to={ROUTES.HOME} className="text-decoration-none">
                        <h2 className="font-rampart my-3 text-primary">
                            Contact Manager
                        </h2>
                    </Link>
                </Col>
                <Col>
                    {!!username && (
                        <Dropdown overlay={menu}>
                            <Button type="primary">
                                {username}
                                <DownOutlined />
                            </Button>
                        </Dropdown>
                    )}
                </Col>
            </Row>
            <Outlet />
        </div>
    );
};

export default Navbar;
