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
                <h2 className="text-3xl">Work Experience</h2>
                <p className="mb-4">The nine-to-fives that often ended after five.</p>
                <div className="mt-12">
                    {employers}
                </div>
            </section>
        );
    }
}

export default Employers;
