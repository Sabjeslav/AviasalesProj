import React, {useState} from 'react';
import style from './SortTabs.module.sass'
import {useDispatch} from "react-redux";
import cx from "classnames"
import {sortByFlightDuration, sortByLowestPrice} from "../../redux/tickets/actionsCreators";

const SortTabs = () => {
    const dispatch = useDispatch()
    const [tabs, setTabs] = useState({
        price: false,
        duration: false
    });
    const sortByPrice = (): void => {
        setTabs({price: true, duration: false})
        dispatch(sortByLowestPrice())
    }
    const sortByDuration = (): void => {
        setTabs({price: false, duration: true})
        dispatch(sortByFlightDuration())
    }
    return (
        <div className={style.container}>
            <div onClick={sortByPrice} className={cx(style.tab, {
                [style.activeTab]: tabs.price
            })}>Самый дешевый
            </div>
            <div onClick={sortByDuration} className={cx(style.tab, {
                [style.activeTab]: tabs.duration
            })}>Самый быстрый
            </div>
            <div className={style.tab}>Оптимальный</div>
        </div>
    );
};

export default SortTabs;
