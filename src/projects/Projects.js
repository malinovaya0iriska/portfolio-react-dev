import React from 'react';
import {Project} from "./project/Project";
import styleContainer from "../common/styles/containerStyle.module.scss";
import styles from './Projects.module.css'


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    <Project title={'The best todolist'}
                             description={'Box wrapping is not supported. box-lines is the property in this spec to achieve wrapping'}/>
                    <Project title={'The best todolist'}
                             description={'Box wrapping is not supported. box-lines is the property in this spec to achieve wrapping'}/>
                    <Project title={'The best todolist'}
                             description={'Box wrapping is not supported. box-lines is the property in this spec to achieve wrapping'}/>
                    <Project title={'The best todolist'}
                             description={'Box wrapping is not supported. box-lines is the property in this spec to achieve wrapping'}/>

                    <Project title={'Social net'}
                             description={'Box wrapping is not supported. box-lines is the property in this spec to achieve wrapping'}/>
                </div>
            </div>
        </div>
    );
};

