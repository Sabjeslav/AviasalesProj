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

interface IGetTicketsToken {
    type: TicketsActionTypes.GET_TICKETS_TOKEN
    payload: string
}

export type TicketAction = IGetTicketsAction | IGetTicketsSuccessAction | IGetTicketsErrorAction | IGetTicketsToken