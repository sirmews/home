import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Contentful from 'contentful';
import Employer from './employer';

class Projects extends Component {

    render = () => {
        /**
         * Don't render unless we actually have something
         */
        if(!this.props.content) return null;
        let projects = this.props.content.map(({fields}, key) => 
            <div className="employer" key={key}>
                <h3 className="bt ma0 pt3 dib">{fields.client} - {fields.job}</h3>
                <p className="ma0"><a className="link color-inherit hover-near-black hover-bg-near-white" href={fields.link}>{fields.link}</a></p>
                <p>{fields.description}</p>
            </div>
        );
        return (
            <section id="employers" className="pa4 ph5 lh-copy mw8">
                <h2 className="f2 ma1">Work Experience</h2>
                {projects}
            </section>
        );
    }
}

export default Projects;
