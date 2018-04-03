import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {

    componentDidMount = () => {
        const script = document.createElement("script");
        script.innerHTML = "(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id='typef_orm_share', b='https://embed.typeform.com/'; if(!gi.call(d,id)){ js=ce.call(d,'script'); js.id=id; js.src=b+'embed.js'; q=gt.call(d,'script')[0]; q.parentNode.insertBefore(js,q) } })()";
        document.body.appendChild(script);
    }

    render = () => {
        return(
            <footer className="w-100 w-70-ns" id="contact">
                <p className="f5 lh-copy">
                <span>A somewhat over-engineered website by Nav ¯\_(ツ)_/¯</span> / <a className="typeform-share link near-black bg-near-white hover-bg-light-silver ph1" href="https://nav36.typeform.com/to/q8Sibg" data-mode="drawer_right" data-hide-headers="true" data-hide-footer="true" target="_blank">Get in touch</a></p>
            </footer>
        )
    }
}

export default Footer;
