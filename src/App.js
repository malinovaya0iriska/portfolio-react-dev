import './App.scss';
import {Header} from "./a1-header/Header";
import {Main} from "./a2-main/Main";
import {Skills} from "./a3-skills/Skills";
import {Projects} from "./a4-projects/Projects";
import {Contacts} from "./a5-contacts/Contacts";
import {Footer} from "./a6-footer/Footer";
import {AiOutlineRocket} from "react-icons/all";

import {Link} from "react-scroll";

const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Link className={'backUp'}
                  to={'home'}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
            > <AiOutlineRocket/>
            </Link>
            <Footer/>
        </div>
    );
};

export default App;
