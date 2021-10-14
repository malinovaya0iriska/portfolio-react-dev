import React from 'react';
import styles from './Nav.module.scss'
import {AiOutlineHome, BiCodeBlock, BiEnvelope, BiVideo, RiBookReadLine} from "react-icons/all";
import profileImg from './../../assets/img/profile-img.jpg'

export const Nav = () => {
    return (
        <>
            <div className={styles.profile}>
                <img src={profileImg} alt={''} className={styles.profileImg}/>
                <h1>Ira Marts</h1>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.active}><a href={'#home'}><AiOutlineHome/>Home</a></li>
                    <li><a href={'#skills'}><BiCodeBlock/>Skills</a></li>
                    <li><a href={'#projects'}><RiBookReadLine/>Projects</a></li>
                    {/*<li><a href={'#video'}><BiVideo/>Video</a></li>*/}
                    <li><a href={'#contact'}><BiEnvelope/>Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

