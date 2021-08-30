import React from 'react';
import style from './PageWrapper.module.sass'

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const PageWrapper = ({children}: WrapperProps) => {
    return (
        <div className={style.main}>
            {children}
        </div>
    );
};

export default PageWrapper;
