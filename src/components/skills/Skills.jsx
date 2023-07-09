import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Coding from './Coding';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Skills</span>

            <div className="skills__container container grid">
                <Frontend />
                {/* <Coding /> */}
            </div>
        </section>
    )
}

export default Skills