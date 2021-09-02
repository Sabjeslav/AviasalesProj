import React from 'react';
import style from './SortTabs.module.sass'
import {useSelector} from "react-redux";

const SortTabs = () => {
    const ticketState = useSelector(state => state)
    const click = (): void => {
        console.log('ticketState', ticketState)
    }
    return (
        <div className={style.container}>
            <div onClick={click} className={style.tab}>Самый дешевый</div>
            <div className={style.tab}>Самый быстрый</div>
            <div className={style.tab}>Оптимальный</div>
        </div>
    );
};

export default SortTabs;
