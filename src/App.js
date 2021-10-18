import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./a1-header/Header";
import {Main} from "./a2-main/Main";
import {Skills} from "./a3-skills/Skills";
import {Projects} from "./a4-projects/Projects";
import {Contacts} from "./a5-contacts/Contacts";
import {Footer} from "./a6-footer/Footer";
import {UpBtn} from "./common/components/UpBtn/UpBtn";


const App = () => {
    let [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        document.addEventListener("scroll", function (e) {
            if (window.pageYOffset > 150) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    })
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <UpBtn isVisible={isVisible}/>
            <Footer/>
        </div>
    );
};

export default App;
