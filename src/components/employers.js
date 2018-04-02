import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Contentful from 'contentful';
import Employer from './Employer';

class Employers extends Component {

    client = Contentful.createClient({
        space: '10mbfsw2t6th',
        accessToken: '21390be764687f18d754b584f31fbe0303228ed04cea3dc5f5d643bb590963f0'
    });

    constructor(props) {
        super(props);
        this.state = {
            employers: []
        }
    }

    componentDidMount = () => {
        this.fetchPosts().then(this.setPosts);
    }

    /**
     * Add contentful content to the state
     */
    setPosts = response => {
        this.setState({
            employers: response.items
        })
    }

    /**
     * Fetch content from contentful
     */
    fetchPosts = () => this.client.getEntries();

    render = () => {
        let employers = this.state.employers.map(({fields}, key) => 
            <Employer key={key} content={fields} />
        );
        return (
            <section id="employers" className="pa4 ph5 lh-copy mw8">
                <h2 className="f2">Work Experience</h2>
                {employers}
            </section>
        );
    }
}

export default Employers;
