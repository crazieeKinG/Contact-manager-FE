const formatContactData = (values: any) => {
    const formatedData = new FormData();
    formatedData.append("name", values.name);
    formatedData.append("phone", values.phone);
    formatedData.append("phoneType", values.phoneType);
    formatedData.append("email", values.email);
    formatedData.append("address", values.address);
    if (!!values.photo) formatedData.append("photo", values.photo.file);
    formatedData.append("favourite", `${!!values.favourite}`);

    return formatedData;
};

export default formatContactData;
