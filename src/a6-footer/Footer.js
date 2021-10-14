import React from 'react';
import styles from './Footer.module.scss'
import {BsLinkedin, SiCodewars, SiGithubsponsors, VscGithub} from "react-icons/all";

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <ul className={styles.socialShare}>
                    <li><a href={'https://github.com/malinovaya0iriska'}><VscGithub/></a></li>
                    <li><a href={'https://www.codewars.com/users/malinovaya0iriska'}><SiCodewars/></a></li>
                    <li><a href={'https://www.linkedin.com/in/irina-martsulevich-342073217/'}><BsLinkedin/></a></li>
                </ul>
                <div>
                    <h4>Made with <SiGithubsponsors/> by Iryna Martsulevich</h4>
                    <span>©2021 All rights reserved</span>
                </div>

            </div>


        </div>
    )
};


