import React from 'react';
import style from './TicketsWrapper.module.sass'
import Ticket from "../Ticket";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import {setTicketsLimit} from "../../redux/tickets/actionsCreators";

const TicketsWrapper = () => {
    const dispatch = useDispatch()
    const ticketsState = useSelector((state: TicketsState) => state)
    const loadMoreTickets = () => {
        dispatch(setTicketsLimit())
    }
    if (ticketsState.loading) {
        return <CircularProgress/>
    }
    return (
        <div className={style.tickets}>
            {ticketsState.tickets.slice(0, ticketsState.limit).map((ticket: ticket, index: number) => {
                return <Ticket key={index} ticket={ticket}/>
            })}
            <button onClick={loadMoreTickets} className={style.loadMoreBtn}>Показать еще 5 билетов</button>
        </div>
    );
};

export default TicketsWrapper;
