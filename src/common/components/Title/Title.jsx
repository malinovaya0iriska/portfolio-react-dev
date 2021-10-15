import React from 'react';
import styles from './Title.module.scss'

export const Title = ({text}) => {
    return (
        <h2 className={styles.title}>{text}</h2>
    );
};

