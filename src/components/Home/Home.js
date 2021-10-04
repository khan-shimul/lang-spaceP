import React from 'react';
import './Home.css'
import bannerImg from '../../images/hero-img-01.png'

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <section className="hero-section">
                <div className="row d-flex align-items-center mx-4">
                    <div className="col-md-6">
                        <h1 className="title">Learn New Languages  And Move Forward</h1>
                        <div className="line"></div>
                        <p className="sub-text">When it comes to learning anything, it's all about time. The US Foreign Service Institute (FSI) says that if you can study for ten hours a day, lower grouped languages take 48 days for basic fluency. Meanwhile, difficult languages should take you 72 days</p>
                    </div>
                    <div className="col-md-6">
                        <img className="banner-img" src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;