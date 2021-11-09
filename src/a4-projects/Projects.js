import React from 'react';
import {Project} from "./project/Project";
import styles from './Projects.module.scss'
import {v1} from 'uuid'
import photo1 from './../assets/img/portfolio-1.jpg'
import photo2 from './../assets/img/portfolio-2.jpg'
import photo3 from './../assets/img/portfolio-3.jpg'
import photo4 from './../assets/img/vertical_slider.jpg'
import photo5 from './../assets/img/counter.jpg'
import {Title} from "../common/components/Title/Title";
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    const projectsScope = [
        {
            id: v1(),
            title: 'Todolist',
            description: 'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests',
            img: photo1,
            demo: 'https://malinovaya0iriska.github.io/the-best-todo',
            github: 'https://github.com/malinovaya0iriska/the-best-todo',
        },
        {
            id: v1(),
            title: 'Network',
            description: 'TS, Redux, RestAPI, Thunk',
            img: photo2,
            demo: 'https://malinovaya0iriska.github.io/social-net/',
            github: 'https://github.com/malinovaya0iriska/social-net',
        },
        {
            id: v1(),
            title: 'Game: Catch the Dot',
            description: 'HTML, CSS, JS',
            img: photo3,
            demo: 'https://malinovaya0iriska.github.io/game-cath-dott/',
            github: 'https://github.com/malinovaya0iriska/game-cath-dott',
        },
        {
            id: v1(),
            title: 'Vertical Slider',
            description: 'HTML, CSS, JS',
            img: photo4,
            demo: 'https://malinovaya0iriska.github.io/vertical-slider/',
            github: 'https://github.com/malinovaya0iriska/vertical-slider/tree/gh-pages',
        },
        {
            id: v1(),
            title: 'Simple Counter',
            description: 'HTML, CSS, React(hooks)',
            img: photo5,
            demo: 'https://malinovaya0iriska.github.io/simple-counter',
            github: 'https://github.com/malinovaya0iriska/simple-counter',
        },
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
        <section className={styles.projectsBlock} id={'projects'}>
            <div className={styles.projectContainer}>
                <Title text={'My projects'}/>
                <Fade left cascade>
                    <ul className={styles.projects}>
                        {mappedProjects}
                    </ul>
                </Fade>
            </div>
        </section>
    );
};

