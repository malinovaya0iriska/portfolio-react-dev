import React from 'react';
import styles from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <h3>{props.title}</h3>
            {/* <span className={styles.description}>
        {props.description}
    </span>*/}
        </div>
    );
};

