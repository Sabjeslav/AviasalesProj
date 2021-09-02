import {TicketAction} from "./actions";
import {TicketsActionTypes} from "./actionTypes";



const initialState: TicketsState = {
    tickets: [],
    loading: false,
    error: null,
    token: ""
};

export const ticketsReducer = (
    state = initialState,
    action: TicketAction
): TicketsState => {
    switch (action.type) {
        case TicketsActionTypes.GET_ALL_TICKETS:
            return {...state, loading: true};
        case TicketsActionTypes.GET_TICKETS_SUCCESS:
            return {...state, tickets: action.payload, loading: false};
        case TicketsActionTypes.GET_TICKETS_ERROR:
            return {...state, error: action.payload};
        case TicketsActionTypes.GET_TICKETS_TOKEN:
            return {...state, token: action.payload}
        default:
            return state;
    }
};
