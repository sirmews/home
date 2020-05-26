import React, { useState, useEffect } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

const introText = "Home of Nav.<br/>A perfectly cromulent full stack developer."
const subText = "I sometimes run meetups, write code for money and attempt poetry."

const renderString = (string) => (
    string.split("<br/>").map((x, i) => {
        return <p className="mb-2" key={`paragraph_${i}`}>{x.split("").map((x, i) => {
            return (
                <span key={`string_${i}`}>{x}</span>
            )
        })}</p>
    })
)

const Intro = ({toggledarkmode, isdarkmode}) => {

    return (
        <section id="intro" className="flex justify-between">
            <div className="lg:w-2/3">
                <div className="py-6 px-6 lg:px-12">
                    <div className="text-4xl animated-text font-black">
                        <p className="mb-4"><span className="text-xl">( * ^ *) <span className="wave">ノシ</span></span></p>
                        { renderString(introText) }
                        <div className="text-xl py-2">{ renderString(subText) }</div>
                    </div>
                </div>
            </div>
            <div className="py-6 px-6">
                <DarkModeToggle
                    onChange={(e) => toggledarkmode(e)}
                    checked={isdarkmode}
                    size={50}
                    speed={1.3}
                />
            </div>
        </section>
    )
};

export default Intro;
