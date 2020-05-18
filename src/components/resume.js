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
        this.fetchContent({
            "content_type": "employment"
        }).then(this.setContent.bind(null, 'employment'));
        this.fetchContent({
            "content_type": "projects"
        }).then(this.setContent.bind(null, 'projects'));
    }

    /**
     * Add contentful content to the state
     */
    setContent = (type, response) => {
        this.setState({
            [type]: response.items
        })
        console.log(this.state)
    }

    /**
     * Fetch content from contentful
     */
    fetchContent = ({content_type}) => this.client.getEntries({
        content_type: content_type,
        order: '-fields.endDate'
    });

    render = () => (
        <div className='resume lg:w-2/3 py-6 px-6 lg:px-12 '>
            <Employers content={this.state.employment}/>

            <Education />

            <Projects content={this.state.projects}/>
        </div>
    );
}

export default Resume;
