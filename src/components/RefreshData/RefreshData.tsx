import { notification, Skeleton } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/routesConstants";
import { setContact } from "../../reducers/slices/contactSlice";
import { setRefresh } from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { openNotification, setHeader } from "../../utils/common";
import NotificationButton from "../Notification/NotificationButton";

const RefreshData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );

    useEffect(() => {
        axios
            .get("/contacts", setHeader(token))
            .then((response) => {
                dispatch(setContact(response.data.data));
                dispatch(setRefresh(false));
            })
            .catch((error) => {
                const status = error.response.status;
                status === 401
                    ? openNotification(
                          "Invalid Token!",
                          "User token has expired, sign-in to continue!",
                          <NotificationButton
                              buttonTitle="Sign in"
                              buttonFunction={() => {
                                  notification.close("notification");
                                  navigate(LOGOUT);
                              }}
                          />
                      )
                    : openNotification(
                          "Connection Error! ",
                          "Cannot connect to server",
                          <NotificationButton
                              buttonTitle="Refresh"
                              buttonFunction={() => window.location.reload()}
                          />
                      );
            });
    }, [dispatch, navigate, token]);

    return <Skeleton avatar paragraph={{ rows: 10 }} className="mt-3" active />;
};

export default RefreshData;
