import React, { Component } from 'react';
import "../routes/leadership.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import leadership from "../assets/leader1.svg"
import leadership1 from "../assets/leader2.svg"
import BoardAdvisor from '../pageComponents/Advisors/BoardAdvisor';


export default class Leadership extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
        };
        return (
            <>
                <div className="heading-container-section">
                    <h2 className='leadership-heading'>OUR LEADERSHIP</h2>
                    <h6 className='leadership-para'>BOARD OF DIRECTORS</h6>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="leadership-container">
                            <figure className="md:flex bg-slate-100 rounded-xl p-18 md:p-0 dark:bg-slate-100 p-2">
                                <img className="w-2/5 h-full md:w-58 md:h-auto md:rounded-none rounded-full mx-auto p-1 m-10 ml-5" src={leadership} alt="" width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <figcaption className="font-medium justify-center">
                                        <div className="name-section">
                                            MR. HARI MAHAPATRA
                                        </div>
                                        <div className="text-slate-700 dark:text-slate-500">
                                            CHAIRPERSON & MANAGING DIRECTOR
                                        </div>
                                    </figcaption>
                                    <blockquote>
                                        <p className="text-lg font-medium">
                                            “Co-Founder of Mahapatra Universal Limited Mr. Mahapatra has spent the last 16 years building and leading several organizations as an entrepreneur from manufacturing to financial services.”
                                        </p>
                                    </blockquote>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="leadership-container">
                            <figure className="md:flex bg-slate-100 rounded-xl p-18 md:p-0 dark:bg-slate-100 p-2">
                                <img className="w-2/5 h-full md:w-58 md:h-auto md:rounded-none rounded-full mx-auto p-1 m-10 ml-5" src={leadership1} alt="" width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <figcaption className="font-medium justify-center">
                                        <div className="name-section">
                                            MR. RAKESH SAHNI
                                        </div>
                                        <div className="text-slate-700 dark:text-slate-500">
                                            DIRECTOR
                                        </div>
                                    </figcaption>
                                    <blockquote>
                                        <p className="text-lg font-medium">
                                            “Director of Mahapatra Universal Limited Mr. Mahapatra has spent the last 16 years building and leading several organizations as an entrepreneur from manufacturing to financial services.”
                                        </p>
                                    </blockquote>
                                </div>
                            </figure>
                        </div>
                    </div>
                </Slider>
                <BoardAdvisor/>
            </>
        );
    }
}

