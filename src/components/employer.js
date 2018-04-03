import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Employer extends Component {

    formatDate = (date) => {
        let dateObject = new Date(date);
        let options = { 
            year: 'numeric', month: 'long'
        };
        return dateObject.toLocaleDateString("en-NZ", options);
    };

    render = () => {
        let content = this.props.content;
        return (
            <div className="employer">
                <h3 className="bt ma0 pt3 dib">{content.employer} - {content.title}</h3>
                <h4 className="ma0">{content.location}</h4>
                <small className="date ttu">{this.formatDate(content.startDate)} - {this.formatDate(content.endDate)}</small>
                <p>{content.description}</p>
            </div>
        );
    };
}

export default Employer;
