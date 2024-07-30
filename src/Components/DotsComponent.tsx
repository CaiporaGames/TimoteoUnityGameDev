import React from 'react';
import dotStyles from '../Styles/DotsComponent.module.scss';

const DotsComponent: React.FC = () => {
    return (
        <div className={dotStyles.dotsContainer}>
            <div className={dotStyles.dot}></div>
            <div className={dotStyles.dot}></div>
            <div className={dotStyles.dot}></div>
            
        </div>
    );
};

export default DotsComponent;
