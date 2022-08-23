import { Skeleton } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContact } from "../../reducers/slices/contactSlice";
import { setRefresh } from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import { setHeader } from "../../utils/common";

const RefreshData = () => {
    const dispatch = useDispatch();
    const token = useSelector(
        (state: RootState) => state.authentication.data.token
    );

    useEffect(() => {
        axios
            .get("/contacts", setHeader(token))
            .then((response) => {
                dispatch(setContact(response.data.data));
                dispatch(setRefresh(false));
                console.log(response.data.data);
            })
            .catch(() => {
                console.log("Network Error");
            });
    }, [dispatch]);

    return <Skeleton avatar paragraph={{ rows: 10 }} className="mt-3" active />;
};

export default RefreshData;
