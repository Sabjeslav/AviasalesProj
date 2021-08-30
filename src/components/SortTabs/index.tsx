import React from 'react';
import style from './SortTabs.module.sass'

const SortTabs = () => {
    return (
        <div className={style.container}>
            <div className={style.tab}>Самый дешевый</div>
            <div className={style.tab}>Самый быстрый</div>
            <div className={style.tab}>Оптимальный</div>
        </div>
    );
};

export default SortTabs;
