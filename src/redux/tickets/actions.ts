import {TicketsActionTypes} from "./actionTypes";

interface IGetTicketsAction {
    type: TicketsActionTypes.GET_ALL_TICKETS;
}

interface IGetTicketsSuccessAction {
    type: TicketsActionTypes.GET_TICKETS_SUCCESS;
    payload: any[]
}

interface IGetTicketsErrorAction {
    type: TicketsActionTypes.GET_TICKETS_ERROR;
    payload: string
}

interface ISetTicketsLimit {
    type: TicketsActionTypes.SET_TICKETS_LIMIT,
}

interface ISortTickets {
    type: TicketsActionTypes.SORT_TICKETS_BY_PRICE | TicketsActionTypes.SORT_TICKETS_BY_DURATION
}

interface IFilterTickets {
    type: TicketsActionTypes.FILTER_TICKETS,
    payload: number
}

export type TicketAction =
    IGetTicketsAction
    | IGetTicketsSuccessAction
    | IGetTicketsErrorAction
    | ISetTicketsLimit
    | ISortTickets
    | IFilterTickets