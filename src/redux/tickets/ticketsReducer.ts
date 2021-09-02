import {TicketAction} from "./actions";
import {TicketsActionTypes} from "./actionTypes";

const initialState: TicketsState = {
    tickets: [],
    loading: false,
    error: null,
    limit: 5
};

const sortByPriceFunction = (a: ticket, b: ticket): number => {
    return a.price - b.price;
}

const getFlightDuration = (ticket: ticket): number => {
    let sum: number = 0;
    ticket.segments.forEach((segment) => {
        sum += segment.duration
    })
    return sum;
}

const sortByFlightDuration = (a: ticket, b: ticket): number => {
    return getFlightDuration(a) - getFlightDuration(b)
}

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
        case TicketsActionTypes.SORT_TICKETS_BY_PRICE:
            return {...state, tickets: state.tickets.sort(sortByPriceFunction)};
        case TicketsActionTypes.SORT_TICKETS_BY_DURATION:
            return {...state, tickets: state.tickets.sort(sortByFlightDuration)}
        default:
            return state;
    }
};
