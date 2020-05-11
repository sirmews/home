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
            <section id="employers" className="border-l-2 animated-border lh-copy mw7 pl-6">
                <h2 className="f2 ma0">Work Experience</h2>
                <p className="mv2">The nine-to-fives that often ended after five.</p>
                {employers}
            </section>
        );
    }
}

export default Employers;
