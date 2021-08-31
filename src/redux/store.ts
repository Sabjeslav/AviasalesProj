import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {ticketsReducer} from "./tickets/ticketsReducer";

export const store = createStore(ticketsReducer, applyMiddleware(thunk))