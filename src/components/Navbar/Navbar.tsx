import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { HOME, LOGOUT, NEW_CONTACT } from "../../constants/routesConstants";

const NavBar = () => {
    return (
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
                        key: "home",
                        label: (
                            <Link to={HOME} className="text-decoration-none">
                                Home
                            </Link>
                        ),
                    },
                    {
                        key: "newContact",
                        label: (
                            <Link
                                to={NEW_CONTACT}
                                className="text-decoration-none"
                            >
                                New Contact
                            </Link>
                        ),
                    },
                    {
                        key: "Logout",
                        label: (
                            <Link to={LOGOUT} className="text-decoration-none">
                                Logout
                            </Link>
                        ),
                    },
                ]}
            />
        </div>
    );
};

export default NavBar;
