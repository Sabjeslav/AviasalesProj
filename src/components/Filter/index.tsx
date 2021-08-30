import React from 'react';
import style from './Filter.module.sass'
import StyledCheckbox from "../StyledCheckbox";

const Filter = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Количество пересадок</div>
            <div className={style.options}>
                <div className={style.option}>
                    <StyledCheckbox/>
                    Все
                </div>
                <div className={style.option}>
                    <StyledCheckbox defaultChecked/>
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
