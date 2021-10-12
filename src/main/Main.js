import React from 'react';
import styleContainer from './../common/styles/containerStyle.module.css'
import styles from './Main.module.css'


export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am Ira Marts</h1>
                    <p>A Frontend React Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

