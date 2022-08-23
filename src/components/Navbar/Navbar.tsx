import { Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME, LOGOUT } from "../../constants/routesConstants";
import { RootState } from "../../reducers/store";

const NavBar = () => {
    const username = useSelector(
        (state: RootState) => state.authentication.data.username
    );
    return (
        <div className="row justify-content-between">
            <Menu
                defaultSelectedKeys={["home"]}
                mode="horizontal"
                items={[
                    {
                        key: "home",
                        label: (
                            <Link to={HOME} className="text-decoration-none">
                                CONTACT MANAGER
                            </Link>
                        ),
                    },
                    {
                        key: "user",
                        label: `Welcome! ${username}`,
                        children: [
                            {
                                key: "logout",
                                label: (
                                    <Link
                                        to={LOGOUT}
                                        className="text-decoration-none"
                                    >
                                        Logout
                                    </Link>
                                ),
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default NavBar;
