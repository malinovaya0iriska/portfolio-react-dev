import React from 'react';
import styles from './Title.module.scss'
import Fade from 'react-reveal/Fade';

export const Title = ({text}) => {
    return (
        <Fade left>
        <h2 className={styles.title}>{text}</h2>
        </Fade>
    );
};

