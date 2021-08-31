import {Dispatch} from "react";
import {TicketsActionTypes} from "./actionTypes";
import {TicketAction} from "./actions";
import axiosInstance from "../../services/axiosInstance";

export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({type: TicketsActionTypes.GET_ALL_TICKETS})
            const response = await axiosInstance.get('/tickets')
            setTimeout(() => {
                dispatch({type: TicketsActionTypes.GET_TICKETS_SUCCESS, payload: response.data})
                console.log('response', response)
            }, 500)
        } catch (e) {
            dispatch({type: TicketsActionTypes.GET_TICKETS_ERROR, payload: 'oops!'})
        }
    }
}