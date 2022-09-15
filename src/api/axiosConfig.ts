import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

export default axios;
