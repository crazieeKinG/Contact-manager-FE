const updatetUrlWithId = (url: string, contactId: number) => {
    return url.replace(":id", contactId.toString());
};

export default updatetUrlWithId;
