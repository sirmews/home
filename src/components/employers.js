import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Employer from './employer';

class Employers extends Component {

    render = () => {
        /**
         * Don't render unless we actually have something
         */
        if(!this.props.content) return null;
        let employers = this.props.content.map(({fields}, key) => 
            <Employer key={key} content={fields} />
        );
        return (
            <section id="employers" className="pa4 ph5 lh-copy mw8">
                <h2 className="f2 ma1">Work Experience</h2>
                {employers}
            </section>
        );
    }
}

export default Employers;
