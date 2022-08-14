import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/routesConstants";
import { logOut } from "../../reducers/slices/authenticationSlice";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    dispatch(logOut());
    navigate(SIGN_IN);

    return <div>Logging out</div>;
};

export default Logout;
