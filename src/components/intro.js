import React from 'react';
import ReactDOM from 'react-dom';

const introString = "Home of Nav. <br/>A perfectly cromulent full stack software developer eager to make.".split("").map(x => {return(<span>{x}</span>)})

const renderString = (string) => (
    string.split("").map(x => {return(<span>{x}</span>)})
)

const Intro = () => (
    <section id="intro" className="pv4">
        <h1 className="f-subheadline-l f1-ns fw9 lh-title animated-text">
            <span className="mb3 db">{ renderString("I am Nav") } <span className="f2">( * ^ *) ノシ</span></span>
            <span className="db">{ renderString("A perfectly cromulent full stack software developer.") }</span>
        </h1>
    </section>
);

export default Intro;
