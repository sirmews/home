import React, { useState, useEffect } from 'react';

const introText = "Home of Nav, <br/>a perfectly cromulent full stack developer."
const subText = "I sometimes run meetups, write code for money and attempt poetry."

const renderString = (string) => (
    string.split("<br/>").map((x, i) => {
        return <p className="mb-2">{x.split("").map((x, i) => {
            if(x === "X") return things
            return (
                <span key={i}>{x}</span>
            )
        })}</p>
    })
)

const links = [
    {
        "text": "clutter smothers, simplicity breathes",
        "who": "terry guillemets"
    }
];

const getThings = () => {
    return links[Math.floor(Math.random() * links.length)];
}

const Intro = () => {
    const [things, setThings] = useState(getThings());

    useEffect(() => {
        setTimeout(() => {
            setThings(getThings());
        }, 3000);
    });

    return (
        <section id="intro" className="lg:w-2/3">
            <div className="py-6 px-6 lg:px-12">
                <div className="text-4xl animated-text font-black">
                    <p className="mb-4"><span className="text-xl">( * ^ *) <span className="wave">ノシ</span></span></p>
                    { renderString(introText) }
                    <div className="text-xl py-2">{ renderString(subText) }</div>
                </div>
            </div>
        </section>
    )
};

export default Intro;
