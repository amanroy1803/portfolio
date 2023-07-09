import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Leadership Skils</h3>
                <span className="about__subtitle">Motivate a team to do their best work</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Problem Solving</h3>
                <span className="about__subtitle">Coming up with an intelligent solution</span>
            </div>

            <div className="about__box">
                <i class='uil uil-hourglass about__icon' ></i>
                <h3 className="about__title">Time Management</h3>
                <span className="about__subtitle">Managing time efficiently</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Communication Skills</h3>
                <span className="about__subtitle">To persuade others to listen to your ideas</span>
            </div>
        </div>
    )
}

export default Info