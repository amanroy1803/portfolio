import React from 'react'
import "./qualifications.css"

const Qualifications = () => {
    return (
        <section className="qualification section" id='education'>
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My Educational Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification-icon"></i>Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B. Tech</h3>
                                <h2 className="qualification__title">CGPA - 8.21</h2>
                                <span className="qualification__subtitle">Malaviya National Institute of Technology, Jaipur</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"> 2020 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">XII Standard (94.6%)</h3>
                                <span className="qualification__subtitle">St. Joseph Public School, Begusarai</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"> 2018 - 2020</i>
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">X Standard (96%)</h3>
                                <span className="qualification__subtitle">DAV Public School, HFC, Barauni</span>
                                <div className="qualification__calander">
                                    <i className="uil uil-calendar-alt"> 2018 </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualifications