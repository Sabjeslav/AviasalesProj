import axios from "axios";
import {BASE_URL} from "../constants";

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (localStorage.token)
            config.params = {
                searchId: localStorage.token
            };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log("error", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
