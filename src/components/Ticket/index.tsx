import React from 'react';
import style from './Ticket.module.sass'
import {format, addMinutes} from "date-fns";

export interface TicketProps {
    ticket: ticket
}

const Ticket: React.FC<TicketProps> = ({ticket}: TicketProps) => {
    const imagePath = `https://pics.avs.io/99/36/${ticket.carrier}.png`
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.price}>{ticket.price} P</div>
                <img className={style.image} src={imagePath} alt=""/>
            </div>
            {ticket.segments.map(segment => {
                const startDate = new Date(segment.date);
                return (
                    <div className={style.segment} key={ticket.price * Math.random() * performance.now()}>
                        <div className={style.segmentPart}>
                            <div className={style.segmentPartTitle}>{segment.origin}-{segment.destination}</div>
                            <div
                                className={style.segmentPartData}>{format(startDate, 'p')} - {format(addMinutes(startDate, segment.duration), 'p')}</div>
                        </div>
                        <div className={style.segmentPart}>
                            <div className={style.segmentPartTitle}>В пути</div>
                            <div
                                className={style.segmentPartData}>{Math.trunc(segment.duration / 60)}ч {segment.duration % 60}м
                            </div>
                        </div>
                        <div className={style.segmentPart}>
                            <div className={style.segmentPartTitle}>{segment.stops.length} пересадки</div>
                            <div className={style.segmentPartData}>{segment.stops.map(stop => {
                                return stop + " "
                            })}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Ticket;
