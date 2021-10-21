import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./a1-header/Header";
import {Main} from "./a2-main/Main";
import {Skills} from "./a3-skills/Skills";
import {Projects} from "./a4-projects/Projects";
import {Contacts} from "./a5-contacts/Contacts";
import {Footer} from "./a6-footer/Footer";
import {UpBtn} from "./common/components/UpBtn/UpBtn";
import {Presentation} from "./a3-presentation/Presentation"

const App = () => {
    const [menu, setMenu] = useState(false)
    let [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.pageYOffset > 150) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    })
    useEffect(() => {
            if (menu) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
        ,
        [menu]
    )
    return (
        <div className={'App'}>
            <Header menu={menu} setMenu={setMenu}/>
            <Main/>
            <Presentation/>
            <Skills/>
            <Projects/>
            <Contacts/>
            {!menu && <UpBtn isVisible={isVisible}/>}
            <Footer/>
        </div>
    );
};

export default App;
