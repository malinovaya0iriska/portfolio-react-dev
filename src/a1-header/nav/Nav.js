import React from 'react';
import styles from './Nav.module.scss'
import {
    AiOutlineHome,
    BiCodeBlock,
    BiEnvelope,
    BsGithub,
    FaLinkedinIn,
    GrGooglePlus,
    RiBookReadLine,
    SiCodewars
} from "react-icons/all";
import profileImg from './../../assets/img/profile-img.jpg'

export const Nav = () => {
    return (
        <>
            <div className={styles.profile}>
                <img src={profileImg} alt={''} className={styles.profileImg}/>
                <h1>Ira Marts</h1>
                <div className={styles.socialLinks}>
                    <a href={'https://www.instagram.com/iriskamalinka/'} target="_blank" rel="noreferrer">
                        <SiCodewars/>
                    </a>
                    <a href={'mailto:martsulevich.irina@gmail.com'}>
                        <GrGooglePlus/>
                    </a>
                    <a href={'https://www.linkedin.com/in/irina-martsulevich-342073217/'} target="_blank"
                       rel="noreferrer">
                        <FaLinkedinIn/>
                    </a>
                    <a href="https://github.com/malinovaya0iriska" target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>
                </div>
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

