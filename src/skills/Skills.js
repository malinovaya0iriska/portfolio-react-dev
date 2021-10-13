import React from 'react';
import {Skill} from "./skill/Skill";
import styleContainer from '../common/styles/containerStyle.module.scss'
import styles from './skills.module.css'


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skills}>
                    <Skill title={'HTML'} description={'Jeffrey is a Responsive Minimal Personal Portfolio '}/>
                    <Skill title={'HTML'} description={'Jeffrey can be used for many purposes starting from'}/>
                    <Skill title={'HTML'} description={' freelancers, photography and much more.'}/>
                    <Skill title={'HTML'} description={'Jeffrey can be used for many purposes starting from'}/>
                    <Skill title={'HTML'} description={' freelancers, photography and much more.'}/>
                </div>
            </div>
        </div>
    );
};
