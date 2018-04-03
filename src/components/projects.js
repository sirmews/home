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
                {fields.link ? (
                    <p className="ma0"><a className="link near-black bg-near-white hover-bg-light-silver ph1" href={fields.link}>{fields.link}</a></p>
                ) : ''}
                {fields.description.split("\n").map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            </div>
        );
        return (
            <section id="employers" className="pv4 lh-copy mw7">
                <h2 className="f2 ma0">Projects</h2>
                <p className="mv2">All of those things done outside of nine-to-fives and in-between.</p>
                {projects}

                <p className="bt ma0 pt3 dib">See my <a className="link near-black bg-near-white hover-bg-light-silver ph1 f4" href="https://github.com/raonav/">Github</a> for those small projects that didn't make the cut.</p>
            </section>
        );
    }
}

export default Projects;
