import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Employer extends Component {
    render = () => {
        let content = this.props.content;
        return (
            <div className="employer">
                <h3 className="bt ma0 pt3 dib">{content.employer} - {content.title}</h3>
                <h4 className="ma0">{content.location}</h4>
                <small className="date ttu">{content.startDate} - {content.endDate}</small>
                <p>{content.description}</p>
            </div>
        );
    }
}

export default Employer;
