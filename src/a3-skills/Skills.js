import React from 'react';
import {Skill} from "./skill/Skill";
import styles from './Skills.module.scss'
import {
    DiCss3,
    DiGit,
    DiReact,
    FaSass,
    FiFigma,
    SiAntdesign,
    SiJavascript,
    SiJest,
    SiMaterialui,
    SiPostman,
    SiRedux,
    SiStorybook,
    SiTypescript,
    TiHtml5
} from "react-icons/all";
import {v1} from "uuid";


export const Skills = () => {
    const skillsScope = [
        {id: v1(), title: 'TS', imgSrc: <SiTypescript/>},
        {id: v1(), title: 'JS', imgSrc: <SiJavascript/>},
        {id: v1(), title: 'React', imgSrc: <DiReact/>},
        {id: v1(), title: 'Redux', imgSrc: <SiRedux/>},
        {id: v1(), title: 'Material UI', imgSrc: <SiMaterialui/>},
        {id: v1(), title: 'Ant Design', imgSrc: <SiAntdesign/>},
        {id: v1(), title: 'TDD JEST', imgSrc: <SiJest/>},
        {id: v1(), title: 'Git', imgSrc: <DiGit/>},
        {id: v1(), title: 'HTML', imgSrc: <TiHtml5/>},
        {id: v1(), title: 'Sass', imgSrc: <FaSass/>},
        {id: v1(), title: 'CSS', imgSrc: <DiCss3/>},
        {id: v1(), title: 'Figma', imgSrc: <FiFigma/>},
        {id: v1(), title: 'Storybook', imgSrc: <SiStorybook/>},
        {id: v1(), title: 'Postman', imgSrc: <SiPostman/>},
    ]
    const mappedSkills = skillsScope.map((s) =>
        <li key={s.id}>
            <Skill title={s.title} icon={s.imgSrc}/>
        </li>)

    return (
        <section className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.title}>My skills</h2>
                <ul className={styles.skills}>
                    {mappedSkills}
                </ul>
            </div>
        </section>
    );
};
