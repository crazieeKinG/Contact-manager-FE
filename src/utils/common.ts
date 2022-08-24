import { notification } from "antd";

export const setHeader = (token: string) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const formatContactData = (values: any) => {
    const formatedData = new FormData();
    formatedData.append("name", values.name);
    formatedData.append("phone", values.phone);
    if (!!values.photo) formatedData.append("photo", values.photo.file);
    formatedData.append("favourite", `${!!values.favourite}`);

    return formatedData;
};

export const openNotification = (
    messageTitle: string,
    messageDescription: string,
    btn: JSX.Element
) => {
    const key = `notification`;
    notification.open({
        message: messageTitle,
        description: messageDescription,
        btn,
        key,
        duration: null,
    });
};
