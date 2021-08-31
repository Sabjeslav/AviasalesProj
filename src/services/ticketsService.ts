import axiosInstance from "./axiosInstance";

export const getSearchToken = () => {
    return axiosInstance({
        method: "get",
        url: "/search"
    })
}