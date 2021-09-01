import {Dispatch} from "react";
import {TicketsActionTypes} from "./actionTypes";
import {TicketAction} from "./actions";
import axiosInstance from "../../services/axiosInstance";
import axios from "axios";

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

export const getToken = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            const response = await axios.get('https://front-test.beta.aviasales.ru/search')
            dispatch({type: TicketsActionTypes.GET_TICKETS_SUCCESS, payload: response.data})
            console.log('response', response)
        } catch (e) {
            dispatch({type: TicketsActionTypes.GET_TICKETS_ERROR, payload: 'oops!'})
        }
    }
}

// dispatch: Dispatch<TicketAction>