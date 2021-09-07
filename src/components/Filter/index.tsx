import React, {useEffect, useState} from 'react';
import style from './Filter.module.sass'
import StyledCheckbox from "../StyledCheckbox";
import {useDispatch} from "react-redux";
import {applyFilters} from "../../redux/tickets/actionsCreators";

const Filter = () => {
    const dispatch = useDispatch();
    const initialState: filterItem[] = [
        {value: 0},
        {value: 1},
        {value: 2},
        {value: 3}]
    const [filters, setFilters] = useState(initialState);

    useEffect(() => {
        dispatch(applyFilters(filters))
    }, [filters]);

    const setFilterValue = (value: number): void => {
        setFilters([{value}])
    }

    return (
        <div className={style.wrapper}>
            <div className={style.title}>Количество пересадок</div>
            <div className={style.options}>
                <div className={style.option}>
                    <StyledCheckbox defaultChecked onChange={() => setFilters(initialState)}/>
                    Все
                </div>
                <div className={style.option}>
                    <StyledCheckbox onChange={() => setFilterValue(0)}/>
                    Без пересадок
                </div>
                <div className={style.option}>
                    <StyledCheckbox onChange={() => setFilterValue(1)}/>
                    1 пересадка
                </div>
                <div className={style.option}>
                    <StyledCheckbox onChange={() => setFilterValue(2)}/>
                    2 пересадки
                </div>
                <div className={style.option}>
                    <StyledCheckbox onChange={() => setFilterValue(3)}/>
                    3 пересадки
                </div>
            </div>
        </div>
    );
};

export default Filter;
