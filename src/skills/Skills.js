import React from 'react';
import {Skill} from "./skill/Skill";
import styleContainer from '../common/styles/containerStyle.module.scss'
import styles from './Skills.module.scss'
import {
    DiCss3,
    DiGit,
    DiReact,
    FaSass, FiFigma,
    SiAntdesign,
    SiJavascript, SiJest,
    SiMaterialui, SiPostman,
    SiRedux,
    SiStorybook,
    SiTypescript,
    TiHtml5
} from "react-icons/all";


export const Skills = () => {
    const skillsScope = [
        {title: 'TS', description: '', imgSrc: <SiTypescript/>},
        {title: 'JS', description: '', imgSrc: <SiJavascript/>},
        {title: 'React', description: '', imgSrc: <DiReact/>},
        {title: 'Redux', description: '', imgSrc: <SiRedux/>},
        {title: 'Material UI', description: '', imgSrc: <SiMaterialui/>},
        {title: 'Ant Design', description: '', imgSrc: <SiAntdesign/>},
        {title: 'TDD JEST', description: '', imgSrc: <SiJest/>},
        {title: 'Git', description: '', imgSrc: <DiGit/>},
        {title: 'HTML', description: '', imgSrc: <TiHtml5/>},
        {title: 'Sass', description: '', imgSrc: <FaSass/>},
        {title: 'CSS', description: '', imgSrc: <DiCss3/>},
        {title: 'Figma', description: '', imgSrc: <FiFigma/>},
        {title: 'Storybook', description: '', imgSrc: <SiStorybook/>},
        {title: 'Postman', description: '', imgSrc: <SiPostman/>},
    ]
    const mappedSkills = skillsScope.map((s, index) => <li key={index}><Skill title={s.title} description={''}
                                                                              icon={s.imgSrc}/></li>)
    return (
        <section className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>
                <ul className={styles.skills}>
                    {mappedSkills}
                </ul>
            </div>
        </section>
    );
};
