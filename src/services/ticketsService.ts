import axiosInstance from "./axiosInstance";
import {AxiosResponse} from "axios";

export const getSearchToken = async () => {
    return axiosInstance.get('/search').then((res: AxiosResponse) => {
        localStorage.token = res.data?.searchId;
    })
}

export const getAllTickets = () => {
    return axiosInstance({
        method: 'get',
        url: '/tickets'
    })
}