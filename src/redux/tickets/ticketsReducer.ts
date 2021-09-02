import {TicketAction} from "./actions";
import {TicketsActionTypes} from "./actionTypes";

const initialState: TicketsState = {
    tickets: [],
    filteredTickets: [],
    loading: false,
    error: null,
    limit: 5,
    filters: {
        all: true,
        one: false,
        two: false,
        three: false
    }
};

const sortByPrice = (a: ticket, b: ticket): number => {
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

const changeFilter = (state: TicketsState = initialState, type: number) => {
    switch (type) {
        case 1:
            return {...state, filters: {...state.filters, one: !state.filters.one, all: false}}
        case 2:
            return {...state, filters: {...state.filters, two: !state.filters.two, all: false}}
        case 3:
            return {...state, filters: {...state.filters, two: !state.filters.three, all: false}}
        default:
            break;
    }
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
            return {...state, tickets: state.tickets.sort(sortByPrice)};
        case TicketsActionTypes.SORT_TICKETS_BY_DURATION:
            return {...state, tickets: state.tickets.sort(sortByFlightDuration)};
        case TicketsActionTypes.FILTER_TICKETS:
            const type: number = action.payload;
            return state;
        default:
            return state;
    }
};
