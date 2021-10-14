import React from 'react';
import {Project} from "./project/Project";
import styles from './Projects.module.scss'
import {v1} from 'uuid'
import photo1 from './../assets/img/portfolio-2.jpg'
import photo2 from './../assets/img/portfolio-4.jpg'
import photo3 from './../assets/img/portfolio-5.jpg'
import photo4 from './../assets/img/portfolio-6.jpg'

export const Projects = () => {
    const projectsScope = [
        {
            id: v1(),
            title: 'Todolist',
            description: 'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests',
            img: photo1,
            demo: '',
            github: 'https://github.com/MariaSyrokvash/myPortfolio/tree/master/src/components/a4-Portfolio/Projects',
        },
        {
            id: v1(),
            title: 'Todolist',
            description: 'TS, Redux, RestAPI, Thunk,Material UI',
            img: photo2,
            demo: '',
            github: '',
        },
        {id: v1(), title: 'Todolist', description: '', img: photo3, demo: '', github: '',},
        {id: v1(), title: 'Todolist', description: '', img: photo4, demo: '', github: '',},
    ]


    const mappedProjects = projectsScope.map((p) => <li key={p.id}>
        <Project title={p.title}
                 demo={p.demo}
                 description={p.description}
                 img={p.img}
                 github={p.github}
        />
    </li>)

    return (
        <section className={styles.projectsBlock}>
            <div className={styles.projectContainer}>
                <h2 className={styles.title}>My projects</h2>
                <ul className={styles.projects}>
                    {mappedProjects}
                </ul>
            </div>
        </section>
    );
};

