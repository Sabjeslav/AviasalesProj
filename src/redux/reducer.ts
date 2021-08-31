import * as actionTypes from "./actionTypes"

const initialState: TicketState = {
    tickets: [],
    isFetching: false
}

const reducer = (
    state: TicketState = initialState,
    action: TicketAction
) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TICKETS:
            return {...state, tickets: action.tickets}
        default:
            return state;
    }
}

export default reducer;