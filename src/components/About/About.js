import React from 'react';
import aboutImg from '../../images/about-img.jpg'
import ceo from '../../images/ceo.jpg'
import './About.css'

const About = () => {
    return (
        <div className="overflow-hidden">
            <div className="row d-flex align-items-center bg-about">
                <div className="col-md-5">
                    <img className="w-100" src={aboutImg} alt="" />
                </div>
                <div className="col-md-7">
                    <h1 className="title-about">Know About Lang_Space</h1>
                    <p>Lang_Space offers online language courses to learn English, Spanish, French, Japanese and more. Whether you are learning languages online in order to study or work abroad or simply want to explore different cultures, you will find courses to help you on your way.</p>
                </div>
            </div>

            <div className="ceo-container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 detils">
                        <div className="d-flex mb-4">
                            <div className="d-flex align-aitems-center px-3">
                                <div><i class="fas fa-laptop me-2 icon"></i></div>
                                <div className="details-text"><p>Online Tutoring</p></div>
                            </div>
                            <div className="d-flex align-aitems-center">
                                <div><i class="fas fa-user-graduate me-2 icon"></i></div>
                                <p className="details-text">Expert Mentor</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-aitems-center px-3">
                                <div><i class="fab fa-accessible-icon me-2 icon"></i></div>
                                <p className="details-text">Lifetime Access</p>
                            </div>
                            <div className="d-flex align-aitems-center">
                                <div><i class="fas fa-graduation-cap me-2 icon"></i></div>
                                <p className="details-text">Activate Learning</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <div className="ceo-div">
                                <img className="ceo-img" src={ceo} alt="" />
                            </div>
                            <div className="ceo-details ms-4">
                                <h2>John Smith</h2>
                                <p>Founder nd CEO <br /><small>California, USA</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;