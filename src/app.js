import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import Header from './components/header';
import Resume from './components/resume';
import Footer from './components/footer';
import ThemeContext from './ThemeContext';

import 'tachyons';

import './style.scss'

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <ThemeContext.Provider value={isDarkMode}>
            <div className={`App font-sans ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'mode-light bg-gray-200 text-gray-900'}`}>
                <Intro isdarkmode={isDarkMode} toggledarkmode={(e) => {setIsDarkMode(e)}} />
                <Resume />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('app'));

