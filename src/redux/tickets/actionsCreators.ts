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
            dispatch({type: TicketsActionTypes.GET_TICKETS_TOKEN, payload: response.data?.searchId})
            console.log('response', response)
        } catch (e) {
            dispatch({type: TicketsActionTypes.GET_TICKETS_ERROR, payload: 'Error while getting token!'})
        }
    }
}

