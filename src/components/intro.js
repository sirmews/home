import React, { useState, useEffect } from 'react';

const introText = "Hi, I'm Nav.<br/>I'm a full stack web developer.<br/>"

const renderString = (string) => (
    string.split("<br/>").map((x, i) => {
        return <p className="mb-4">{x.split("").map((x, i) => {
            return (
                <span key={i}>{x}</span>
            )
        })}</p>
    })
)

const getThings = () => {
    return links[Math.floor(Math.random() * links.length)];
}

const Intro = () => {
    // const [things, setThings] = useState(getThings());

    // useEffect(() => {
    //     setTimeout(() => {
    //         setThings(getThings());
    //     }, 5000);
    // });

    return (
        <section id="intro" className="lg:w-2/3">
            <div className="py-6 px-6 lg:px-12">
                <div className="text-5xl animated-text font-black ">
                    <p className="mb-4"><span className="f2">( * ^ *) <span className="wave">ノシ</span></span></p>
                    { renderString(introText) }
                </div>
            </div>
        </section>
    )
};

export default Intro;
