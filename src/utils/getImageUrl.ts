export const getThumbnailUrl = (url: string) => {
    return url.replace("upload", "upload/c_thumb,w_200,g_face");
};
