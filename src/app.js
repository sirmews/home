import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import Header from './components/header';
import Resume from './components/resume';
import Footer from './components/footer';

import 'tachyons';

const App = () => (
    <div className='App'>
        <Header />
        <Intro />
        <Resume />
        <Footer />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

