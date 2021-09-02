import React from 'react';
import style from './TicketsWrapper.module.sass'
import Ticket from "../Ticket";
import {useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";

const TicketsWrapper = () => {
    const ticketsState = useSelector((state: TicketsState) => state)
    if (ticketsState.loading) {
        return <CircularProgress/>
    }
    return (
        <div className={style.tickets}>
            {ticketsState.tickets.map((ticket: ticket, index: number) => {
                return <Ticket key={index} ticket={ticket}/>
            })}
        </div>
    );
};

export default TicketsWrapper;
