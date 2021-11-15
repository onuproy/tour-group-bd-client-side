import React from 'react';
import { Link } from 'react-router-dom';
import doctor from './../../banner.webp';
import css from './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area tutor-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-area">
                            <h2>Discover in the world</h2>
                            <p>Travel to the any corner of the world, without going around in circles</p>
                            <div className="button-area">
                                <Link to="/contact" className="btn btn-outline-success">Contact Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;