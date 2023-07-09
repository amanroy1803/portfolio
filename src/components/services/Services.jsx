import React, { useState } from 'react';
// import { BsChevronDoubleRight } from "react-icons/bs"
import "./services.css";
import exp1 from "../../assets/expns.png";
import ecom1 from "../../assets/ecom1.png";
import ecom2 from "../../assets/ecom2.png";
import ecom3 from "../../assets/ecom3.png";
import ecom4 from "../../assets/ecom4.png";
import ecom5 from "../../assets/ecom5.png";
import ecom6 from "../../assets/ecom6.png";
import ecom7 from "../../assets/ecom7.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import snake from "../../assets/snake.png";
import tc from "../../assets/tc.png";


const Services = () => {
    const [toggleState, setToggleState] = useState(false);
    const [page, setPage] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const togglePage = (index) => {
        setPage(index);
    }
    return (
        <section className="services section" id="projects" >
            <h2 className="section__title">My Projects</h2>
            <span className="section__subtitle">Here is a showcase of some of my best projects that I made. They can be found on my <a href="https://github.com/amanroy1803">Github</a> !</span>

            <div className="cont" >
                <div className={page === 0 ? "services__container container grid active_service" : "services__container container grid"} >
                    <div className="services__content">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 48 48" id="social-community"><path d="M10.1 0h27.7C43.5 0 48 4.5 48 10.1v27.7C48 43.5 43.5 48 37.9 48H10.1C4.5 48 0 43.5 0 37.9V10.1C0 4.5 4.5 0 10.1 0z"></path><path fill="#fff" d="M26.5 17.6c-.2 0-.5-.2-.5-.4-.7-4.3-1.8-6.2-2.5-6.2s-1.9 1.9-2.5 6.2c0 .3-.3.5-.6.4-.3 0-.5-.3-.4-.6.4-2.6 1.4-7.1 3.5-7.1s3.1 4.4 3.5 7.1c0 .3-.1.6-.5.6.1 0 0 0 0 0zm-3 20.4c-2.1 0-3.1-4.4-3.5-7.1 0-.3.1-.5.4-.6.3 0 .5.1.6.4.7 4.3 1.8 6.2 2.5 6.2s1.9-1.9 2.5-6.2c0-.3.3-.5.6-.4.3 0 .5.3.4.6-.4 2.7-1.4 7.1-3.5 7.1z"></path><path fill="#fff" d="M23.6 29.9c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0 2.3 2.3 2.3 6.1 0 8.5-1.2 1.2-2.8 1.8-4.3 1.8zM20 27.5c1.9 1.9 5.1 1.9 7.1 0 1.9-2 1.9-5.1 0-7.1s-5.1-1.9-7.1 0-1.9 5.1 0 7.1zm-6.7 8.2c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l4.2-4.2c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-4.2 4.2c-.2.2-.6.4-1 .4zm-.3-1.2c.2.2.5.2.7 0l3.9-3.9-.7-.7-3.9 3.9c-.2.2-.2.5 0 .7z"></path><path fill="#fff" d="M17.6 30.4c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l2.1-2.1c.2-.2.5-.2.7 0s.2.5 0 .7l-2.1 2.1c-.1.1-.2.1-.3.1zm-1-2.9c-2.7-.4-7.1-1.4-7.1-3.5s4.4-3.1 7.1-3.5c.3 0 .5.1.6.4 0 .3-.1.5-.4.6-4.3.7-6.2 1.8-6.2 2.5s1.9 1.9 6.2 2.5c.3 0 .5.3.4.6-.1.2-.3.4-.6.4zm13.8 0c-.2 0-.5-.2-.5-.4 0-.3.1-.5.4-.6 4.3-.7 6.2-1.8 6.2-2.5s-1.9-1.9-6.2-2.5c-.3 0-.5-.3-.4-.6 0-.3.3-.5.6-.4 2.6.4 7.1 1.4 7.1 3.5s-4.5 3.1-7.2 3.5z"></path><path fill="#fff" d="M23.5 38c-2.6 0-5.2-.7-7.4-2.2-.2-.1-.3-.5-.2-.7s.5-.3.7-.2c2.1 1.3 4.5 2 6.9 2 7.2 0 13-5.8 13-13s-5.8-13-13-13-13 5.8-13 13c0 2.4.7 4.8 2 6.9.1.2.1.5-.2.7-.2.1-.5.1-.7-.2-1.4-2.2-2.2-4.8-2.2-7.4 0-7.7 6.3-14 14-14s14 6.3 14 14S31.2 38 23.5 38z"></path><path fill="#fff" d="M23.5 34c-1.6 0-3.2-.2-4.8-.6-.3-.1-.4-.3-.4-.6.1-.3.3-.4.6-.4 1.5.4 3 .6 4.5.6 7.2 0 13-4 13-9s-5.8-9-13-9-13 4-13 9c0 2.1 1.1 4.1 3 5.7.2.2.2.5.1.7-.2.2-.5.2-.7.1-2.2-1.8-3.3-4.1-3.3-6.5 0-5.5 6.3-10 14-10s14 4.5 14 10-6.3 10-14 10z"></path><path fill="#fff" d="M23.5 38c-2.4 0-4.7-1.2-6.5-3.3-.2-.2-.2-.5.1-.7.2-.2.5-.2.7.1 1.6 1.9 3.6 3 5.7 3 5 0 9-5.8 9-13s-4-13-9-13-9 5.8-9 13c0 1.5.2 3.1.6 4.5.1.3-.1.5-.4.6-.3.1-.5-.1-.6-.4-.4-1.6-.6-3.2-.6-4.8 0-7.7 4.5-14 10-14s10 6.3 10 14-4.5 14-10 14z"></path></svg>
                            <h3 className="services__title"> SocioSphere  </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"} >
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">SocioSphere</h3>
                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval={10000}>
                                            <img src={s1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval={2000}>
                                            <img src={s2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={s3} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={s4} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={s5} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>


                                <ul className="services__modal-services grid">
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Social media app developed using React, Node, Express, MongoDb.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">User Registration and login functionality.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Dark and Light theme.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Users can make post, like posts, add posts, comment on posts.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">User profile page where users can see all their posts and friends.</p>
                                    </li>
                                </ul>
                                <div className="links">
                                    <div className="links__btns">
                                        <a href="https://sociosphere.netlify.app/">
                                            <button className='links__btn'>Live Demo</button>
                                        </a>
                                    </div>
                                    <div className="links__btns">
                                        <a href="https://github.com/amanroy1803/sociopedia">
                                            <button className='links__btn'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            {/* <i className="uil uil-arrow services__icon"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" id="shopping-cart"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                            <h3 className="services__title"> eCommerce <br /> App </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">eCommerce App</h3>

                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={ecom1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom3} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom4} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom5} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom6} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={ecom7} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>



                                <ul className="services__modal-services grid mt-2">
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Ecommerce App developed with React, Node, Express and MongoDb.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">User log in, register, and reset password available. User authentication also available.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Seperate user and admin profiles. Admin can add, delete, update proudcts as well as change the status of products.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Add to cart, payment options, realtime price update. User can see all order in orders section. </p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Filter by category and price available. Product search option also available</p>
                                    </li>
                                </ul>
                                <div className="links">
                                    <div className="links__btns">
                                        <a href="">
                                            <button disabled className='links__btn'>Live Demo</button>
                                        </a>
                                    </div>
                                    <div className="links__btns">
                                        <a href="https://github.com/amanroy1803/expense-tracker">
                                            <button className='links__btn'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            {/* <i className="uil uil-web-grid services__icon"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" id="graph"><g fill="#200E32" transform="translate(2 2)"><path d="M8.152754,3.55552761 C8.20368413,3.65919399 8.237323,3.77020981 8.2523868,3.88433813 L8.53082191,8.02425688 L8.53082191,8.02425688 L8.66903307,10.1050779 C8.67046167,10.3190591 8.7040335,10.5316649 8.76866587,10.7360386 C8.9355965,11.1325559 9.33716333,11.3845716 9.77405142,11.3669994 L16.4313342,10.9315476 C16.7196104,10.9267943 16.9980001,11.0346143 17.2052401,11.2312807 C17.3779401,11.3951693 17.4894372,11.6095651 17.524563,11.8401601 L17.5363525,11.9801866 C17.260866,15.7948982 14.4591587,18.9766559 10.6523561,19.797994 C6.84555351,20.6193322 2.94186389,18.8842999 1.06070995,15.534895 C0.518387516,14.5618191 0.179650312,13.4922526 0.0643819183,12.388978 C0.0162285779,12.0623771 -0.00497451535,11.7324952 0.000979225624,11.4025464 C-0.00496594783,7.31273376 2.90747021,3.77695779 6.98433295,2.92456686 C7.47500829,2.84816493 7.95602805,3.10792111 8.152754,3.55552761 Z"></path><path d="M10.8700123,0.000819186003 C15.42989,0.11682655 19.2623146,3.39578782 20,7.81229094 L19.9929553,7.84487576 L19.9929553,7.84487576 L19.9728274,7.89227188 L19.9756317,8.0223616 C19.9651826,8.19471218 19.8986437,8.36053991 19.7839681,8.49448471 C19.6645145,8.63401054 19.5013145,8.72903004 19.3215929,8.76590816 L19.2119951,8.78094898 L11.5312118,9.27860816 C11.2757261,9.30380455 11.0213466,9.22142251 10.8313499,9.05195453 C10.6730193,8.91073121 10.5717997,8.72009233 10.543203,8.5146766 L10.0276622,0.845062436 C10.0186901,0.819128783 10.0186901,0.791015148 10.0276622,0.765081496 C10.0347061,0.553672114 10.127765,0.353839855 10.2860482,0.210229821 C10.4443315,0.0666197874 10.6546487,-0.00880036929 10.8700123,0.000819186003 Z" opacity=".4"></path></g></svg>
                            <h3 className="services__title">Expense <br /> Tracker</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(1)} >View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Expense Tracker</h3>

                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={exp1} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <ul className="services__modal-services grid mt-2">
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Developed using React and Speechly AI.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">User data stored in local storage.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Use of Graphs for better visualization and shows real time net balance.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Can be operated by voice.</p>
                                    </li>
                                </ul>

                                <div className="links">
                                    <div className="links__btns">
                                        <a href="https://expense-tracker-royaman.netlify.app/">
                                            <button className='links__btn'>Live Demo</button>
                                        </a>
                                    </div>
                                    <div className="links__btns">
                                        <a href="https://github.com/amanroy1803/expense-tracker">
                                            <button className='links__btn'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more" onClick={() => togglePage(1)}>
                        <span className="services__button"  >View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                    </div>
                </div>


                <div className={page === 1 ? "services__container container grid active_service" : "services__container container grid"} >
                    <div className="more" onClick={() => togglePage(0)}>
                        <span className="services__button"  ><i className="uil uil-arrow-left services__button-icon"></i>Go Back</span>
                    </div>
                    <div className="services__content">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" data-name="Layer 1" viewBox="0 0 24 24" id="game-structure"><path fill="#000000" d="M21,18H19V15a1,1,0,0,0-1-1H13V11.29l1.13.59a1,1,0,0,0,1.45-1.05l-.4-2.37L16.9,6.77a1,1,0,0,0,.26-1,1,1,0,0,0-.81-.68L14,4.72,12.9,2.56a1,1,0,0,0-1.8,0L10,4.72l-2.39.35a1,1,0,0,0-.81.68,1,1,0,0,0,.26,1L8.82,8.46l-.4,2.37a1,1,0,0,0,1.45,1.05L11,11.29V14H6a1,1,0,0,0-1,1v3H3a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20H8v1a1,1,0,0,0,2,0V19a1,1,0,0,0-1-1H7V16H17v2H15a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20h4v1a1,1,0,0,0,2,0V19A1,1,0,0,0,21,18ZM12,8.63a1,1,0,0,0-.47.12l-.8.42.15-.9a1,1,0,0,0-.29-.88l-.65-.64.9-.13a1,1,0,0,0,.76-.54l.4-.82.4.82a1,1,0,0,0,.76.54l.9.13-.65.64a1,1,0,0,0-.29.88l.15.9-.8-.42A1,1,0,0,0,12,8.63Z"></path></svg>
                            <h3 className="services__title"> Snake <br /> Game  </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"} >
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Snake Game</h3>
                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval={10000}>
                                            <img src={snake} className="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>


                                <ul className="services__modal-services grid">
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Snake Game developed using HTML, CSS, and JavaScript.</p>
                                    </li>
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Controlled by keyboard.</p>
                                    </li>
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Total Score at the end of the game.</p>
                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>


                                </ul>
                                <div className="links">
                                    <div className="links__btns">
                                        <a href="https://amanroy1803.github.io/snake-game/">
                                            <button className='links__btn'>Live Demo</button>
                                        </a>
                                    </div>
                                    <div className="links__btns">
                                        <a href="https://github.com/amanroy1803/snake-game">
                                            <button className='links__btn'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            {/* <i className="uil uil-arrow services__icon"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="80" width="80" id="compress"><path fill="#000000" d="M16,9h5a1,1,0,0,0,0-2H17V3a1,1,0,0,0-2,0V8A1,1,0,0,0,16,9ZM8,15H3a1,1,0,0,0,0,2H7v4a1,1,0,0,0,2,0V16A1,1,0,0,0,8,15ZM8,2A1,1,0,0,0,7,3V7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2ZM21,15H16a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2Z"></path></svg>
                            <h3 className="services__title"> Text <br /> Compressor </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Text Compressor</h3>

                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={tc} className="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>



                                <ul className="services__modal-services grid mt-2">
                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Text Compressor made using HTML, CSS, and JavaScript.</p>
                                    </li>

                                    <li className="services__modal-sevice">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Compresson of text is done using Huffman coding algorithm.</p>
                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>

                                    <li className="services__modal-sevice">

                                    </li>
                                </ul>
                                <div className="links">
                                    <div className="links__btns">
                                        <a href="https://amanroy1803.github.io/text-compressor/">
                                            <button className='links__btn'>Live Demo</button>
                                        </a>
                                    </div>
                                    <div className="links__btns">
                                        <a href="https://github.com/amanroy1803/text-compressor">
                                            <button className='links__btn'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </section >
    )
}

export default Services