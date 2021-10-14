import React from 'react';
import styles from './Skill.module.scss'

export const Skill = ({icon, title}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                {icon}
            </div>
            <h3>{title}</h3>
        </div>
    );
};

