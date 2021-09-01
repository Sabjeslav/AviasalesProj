import axiosInstance from "./axiosInstance";

export const getSearchToken = async () => {
    return axiosInstance.get('/search')
}

export const getAllTickets = () => {
    return axiosInstance({
        method: 'get',
        url: '/tickets'
    })
}