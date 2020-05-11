import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Contentful from 'contentful';
import Employers from './employers';
import Projects from './projects';
import Education from './education';

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
        <div className='resume lg:w-2/3 py-6 px-6 lg:px-12 '>
            <Employers content={this.state.employers}/>

            <Education />

            <Projects content={this.state.projects}/>
        </div>
    );
}

export default Resume;
