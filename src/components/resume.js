import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Contentful from 'contentful';
import Employers from './employers';
import Projects from './projects';

class Resume extends Component {

    client = Contentful.createClient({
        space: process.env.CONTENTFUL_SPACE,
        environment: 'master',
        accessToken: process.env.CONTENTFUL_TOKEN
    });

    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }

    componentDidMount = () => {
        this.fetchContent().then(this.setContent);
    }

    /**
     * Add contentful content to the state
     */
    setContent = response => {
        let employers = response.items.filter((entity) => 
            entity.sys.contentType.sys.id == "employment"
        );
        let projects = response.items.filter((entity) => 
            entity.sys.contentType.sys.id == "projects"
        );
        this.setState({
            employers: employers,
            projects: projects
        })
    }

    /**
     * Fetch content from contentful
     */
    fetchContent = () => this.client.getEntries({
        order: '-sys.updatedAt'
    });

    render = () => (
        <div className='resume pv4'>
            <Employers content={this.state.employers}/>

            <section id="" className="pv4 lh-copy mw7">
                <h2 className="f2 ma0">Education</h2>
                <div className="education">
                    <h3 className="bt ma0 pt3 dib">Auckland University of Technology - Bachelors in Computer/Information Technology</h3>
                    <h4 className="ma0">Auckland, New Zealand</h4>
                    <small className="date ttu">August 2009 - August 2013</small>
                </div>
            </section>

            <Projects content={this.state.projects}/>
        </div>
    );
}

export default Resume;
