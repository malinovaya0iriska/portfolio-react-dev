import React from 'react';
import styleContainer from "../common/styles/containerStyle.module.css";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h4>Iryna Martsulevich</h4>
                {/*<span>Find with me</span>*/}
                <ul className={styles.socialShare}>
                    <li><a href={'#'}></a></li>
                    <li><a href={'#'}></a></li>
                    <li><a href={'#'}></a></li>
                    <li><a href={'#'}></a></li>
                </ul>
                <span>©2021 All rights reserved</span>
            </div>
        </div>
    )
};


