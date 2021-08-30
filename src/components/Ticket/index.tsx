import React from 'react';
import style from './Ticket.module.sass'
import logo from '../../img/photo_2021-08-30_16-12-12.jpg'

const Ticket = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.price}>13400 UAH</div>
                <img className={style.image} src={logo} alt=""/>
            </div>
            <div className={style.segment}>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>mow-hkt</div>
                    <div className={style.segmentPartData}>10:45-8:00</div>
                </div>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>В пути</div>
                    <div className={style.segmentPartData}>21ч 15м</div>
                </div>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>2 пересадки</div>
                    <div className={style.segmentPartData}>HKG, jnb</div>
                </div>
            </div>
            <div className={style.segment}>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>mow-hkt</div>
                    <div className={style.segmentPartData}>11:40-00:50</div>
                </div>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>В пути</div>
                    <div className={style.segmentPartData}>13ч 43м</div>
                </div>
                <div className={style.segmentPart}>
                    <div className={style.segmentPartTitle}>1 пересадка</div>
                    <div className={style.segmentPartData}>HKG, jnb</div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
