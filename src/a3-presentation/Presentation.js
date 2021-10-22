import React from 'react';
import styles from './Presentation.module.scss';
import {Title} from "../common/components/Title/Title";
import heroPhoto from './../assets/img/profile-img.jpg'
import {AiOutlineRight} from "react-icons/all";
import Fade from 'react-reveal/Fade';


export const Presentation = () => {
    return (
        <section id={'about'} className={styles.presentationBlock}>
            <div className={styles.aboutContainer}>
                <Title text={'About'}/>
                <p>
                    I am a novice developer with experience in creating SPAs using JavaScript, TypeScript, React,
                    Redux.
                </p>
                <p>In the future I see myself as independent Full Stack developer. I enjoy learning something new.
                </p>
                <p>
                    Able to work in a team and constant self-study, have no problem relate good on people,
                    also work well in a team.
                </p>
                <p>
                    I spend my free time learning English with my tutor and reading tutorials.
                </p>
                <p>
                    Also I like cycling ang hiking with my family and friends. I prefer active recovery to beach rest.
                </p>

                <div className={styles.description}>
                    <Fade left>
                        <img className={styles.photo} src={heroPhoto} alt={''}/>
                    </Fade>
                        <div className={styles.info}>

                            <Fade right>
                                <h3> Web Developer</h3>
                                <p>
                                    I like to create UI and contemplate the result of my work.
                                </p>
                                <ul>
                                    <li><AiOutlineRight/><strong>City: </strong>Polotsk, Belarus</li>
                                    <li><AiOutlineRight/><strong>Telegram: </strong>@Ira_Marts</li>
                                    <li><AiOutlineRight/><strong>Email: </strong>martsulevich.irina@gmail.com</li>
                                    <li><AiOutlineRight/><strong>Freelance: </strong> Available</li>
                                    <li><AiOutlineRight/><strong>English level: </strong> B1+</li>
                                </ul>
                            </Fade>
                        </div>
                </div>
            </div>
        </section>
)
;

};

