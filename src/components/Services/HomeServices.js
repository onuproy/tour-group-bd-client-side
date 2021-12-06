import React, { useEffect, useState } from 'react';
import Singleservice from '../Singleservices/Singleservice';
import css from './Services.css'

const HomeService = () => {
    const [services, setService] = useState([]);
    const singleServices = services;
    useEffect(() => {
        fetch('https://shielded-river-31281.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div class="Service-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <p>Our Services</p>
                        </div>
                    </div>
                    {
                        singleServices.map(service => <Singleservice key={service.id} service={service}></Singleservice>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeService;