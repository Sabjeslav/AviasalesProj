import React from 'react';
import style from './Filter.module.sass'
import StyledCheckbox from "../StyledCheckbox";
import {useDispatch, useSelector} from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    const {filters} = useSelector((state: TicketsState) => state)
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Количество пересадок</div>
            <div className={style.options}>
                <div className={style.option}>
                    <StyledCheckbox defaultChecked/>
                    Все
                </div>
                <div className={style.option}>
                    <StyledCheckbox/>
                    Без пересадок
                </div>
                <div className={style.option}>
                    <StyledCheckbox/>
                    1 пересадка
                </div>
                <div className={style.option}>
                    <StyledCheckbox/>
                    2 пересадки
                </div>
                <div className={style.option}>
                    <StyledCheckbox/>
                    3 пересадки
                </div>
            </div>
        </div>
    );
};

export default Filter;
