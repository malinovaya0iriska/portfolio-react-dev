import React from 'react';
import {Nav} from "./nav/Nav";
import styleContainer from "../common/styles/containerStyle.module.css";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
            <Nav/>
        </div>
        </div>
    );
};

