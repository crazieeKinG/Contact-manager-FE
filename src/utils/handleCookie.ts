export const setCookie = (username: string, token: string) => {
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 86400000);
    document.cookie = `username=${username}; expires=${expireDate}`;
    document.cookie = `token=${token}; expires=${expireDate}`;
};

export const getCookie = () => {
    const cookieData = document.cookie;
    if (!cookieData)
        return {
            username: "",
            token: "",
        };
    const cookieDataList = cookieData.split(";");

    const cookieDataObject: { [index: string]: string } = {};
    cookieDataList.forEach((eachData) => {
        const keyValueList = eachData.split("=");
        cookieDataObject[keyValueList[0].trim()] = keyValueList[1];
    });
    return cookieDataObject;
};

export const deleteCookie = () => {
    const expireDate = new Date();
    document.cookie = `username=; expires=${expireDate}`;
    document.cookie = `token=; expires=${expireDate}`;
};
