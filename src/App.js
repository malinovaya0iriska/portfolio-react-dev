import './App.scss';
import {Header} from "./a1-header/Header";
import {Main} from "./a2-main/Main";
import {Skills} from "./a3-skills/Skills";
import {Projects} from "./a4-projects/Projects";
import {Contacts} from "./a5-contacts/Contacts";
import {Footer} from "./a6-footer/Footer";

const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default App;
