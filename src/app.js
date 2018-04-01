import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import Header from './components/header';

import 'tachyons';

const App = () => (
    <div className='App'>
        <Header />
        <Intro />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

