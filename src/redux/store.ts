import {createStore, applyMiddleware, Store} from "redux"
import thunk from "redux-thunk"

import reducer from './reducer'

const store: Store<TicketState, TicketAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))
export default store;