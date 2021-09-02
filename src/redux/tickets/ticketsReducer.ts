import {TicketAction} from "./actions";
import {TicketsActionTypes} from "./actionTypes";

const initialState: TicketsState = {
    tickets: [],
    loading: false,
    error: null,
    limit: 5
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
        case TicketsActionTypes.SET_TICKETS_LIMIT:
            return {...state, limit: state.limit + 5}
        default:
            return state;
    }
};
