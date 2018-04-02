import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import Header from './components/header';
import Resume from './components/resume';

import 'tachyons';

const App = () => (
    <div className='App'>
        <Header />
        <Intro />
        <Resume />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

