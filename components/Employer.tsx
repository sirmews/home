import React, { Component } from 'react';
import Pill from './Pill';

class Employer extends Component {

    formatDate = (date) => {
        let dateObject = new Date(date);
        let options = {
            year: 'numeric', month: 'long'
        };
        return dateObject.toLocaleDateString("en-NZ", options);
    };

    generateRandomColor = () => (
        `pill-${Math.floor((Math.random() * 20) + 1)}`
    )

    render = () => {
        let content = this.props.content;
        let pills = content.toolchain.split(",").map(
            (toolchain, key) => {return <Pill key={`toolchain_${key}`} toolchain={toolchain} pillcolor={this.generateRandomColor()} />}
        );
        return (
            <div className="employer mb-12">
                <h3 className="dib">{content.employer} - {content.title}</h3>
                <h4 className="ma0">{content.location}</h4>
                <p className="mb-4"><small className="date ttu">{this.formatDate(content.startDate)} - {this.formatDate(content.endDate)}</small></p>
                <p className="mb-4">{content.description}</p>
                <div className="mb-4">
                    {pills}
                </div>
            </div>
        );
    };
}

export default Employer;
