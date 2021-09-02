import React from 'react';
import style from './SortTabs.module.sass'
import {useDispatch} from "react-redux";
import {sortByFlightDuration, sortByLowestPrice} from "../../redux/tickets/actionsCreators";

const SortTabs = () => {
    const dispatch = useDispatch()
    const sortByPrice = (): void => {
        dispatch(sortByLowestPrice())
    }
    const sortByDuration = (): void => {
        dispatch(sortByFlightDuration())
    }
    return (
        <div className={style.container}>
            <div onClick={sortByPrice} className={style.tab}>Самый дешевый</div>
            <div onClick={sortByDuration} className={style.tab}>Самый быстрый</div>
            <div className={style.tab}>Оптимальный</div>
        </div>
    );
};

export default SortTabs;
