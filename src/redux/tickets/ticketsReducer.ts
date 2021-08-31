import {TicketAction} from "./actions";
import {TicketsActionTypes} from "./actionTypes";

interface TicketsState {
    tickets: any[];
    loading: boolean;
    error: null | string;
}

const initialState: TicketsState = {
    tickets: [],
    loading: false,
    error: null,
};

export const ticketsReducer = (
    state = initialState,
    action: TicketAction
): TicketsState => {
    switch (action.type) {
        case TicketsActionTypes.GET_ALL_TICKETS:
            return {tickets: [], loading: true, error: null};
        case TicketsActionTypes.GET_TICKETS_SUCCESS:
            return {tickets: action.payload, loading: false, error: null};
        case TicketsActionTypes.GET_TICKETS_ERROR:
            return {tickets: [], loading: false, error: action.payload};
        default:
            return state;
    }
};
