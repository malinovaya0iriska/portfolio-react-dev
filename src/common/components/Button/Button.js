import React from 'react';
import styles from './Button.module.scss'

export const Button = ({text, type}) => {
    return (
        <button type={type} className={styles.button}>{text}</button>
    );
}

