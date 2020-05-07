import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import Header from './components/header';
import Resume from './components/resume';
import Footer from './components/footer';

import 'tachyons';

import './style.scss'

const App = () => (
    <div className='App'>
        <Intro />
        <Resume />
        <Footer />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

