import {Dispatch} from "react";
import {TicketsActionTypes} from "./actionTypes";
import {TicketAction} from "./actions";
import {getAllTickets, getSearchToken} from "../../services/ticketsService";

export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({type: TicketsActionTypes.GET_ALL_TICKETS})
            const response = await getAllTickets();
            dispatch({type: TicketsActionTypes.GET_TICKETS_SUCCESS, payload: response.data?.tickets})
        } catch (e) {
            dispatch({type: TicketsActionTypes.GET_TICKETS_ERROR, payload: 'Error while getting tickets'})
        }
    }
}

export const getToken = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            const response = await getSearchToken()
            localStorage.token = response.data?.searchId;
        } catch (e) {
            dispatch({type: TicketsActionTypes.GET_TICKETS_ERROR, payload: 'Error while getting token!'})
        }
    }
}

export const setTicketsLimit = () => {
    return (dispatch: Dispatch<TicketAction>) => {
        dispatch({type: TicketsActionTypes.SET_TICKETS_LIMIT})
    }
}

export const sortByLowestPrice = () => {
    return (dispatch: Dispatch<TicketAction>) => {
        dispatch({type: TicketsActionTypes.SORT_TICKETS_BY_PRICE})
    }
}

export const sortByFlightDuration = () => {
    return (dispatch: Dispatch<TicketAction>) => {
        dispatch({type: TicketsActionTypes.SORT_TICKETS_BY_DURATION})
    }
}

