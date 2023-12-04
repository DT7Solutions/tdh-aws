import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';


const processpost = [
    {
        icon: "flaticon-online-booking",
        title: "Superior Quality",
        text: "delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste."
    },
    {
        icon: "flaticon-medal",
        title: "Trusted Brand",
        text: "Building trust with our customers by consistently delivering exceptional quality and reliability."
    },
    {
        icon: "flaticon-grocery",
        title: "High Nutritional Value",
        text: "Abundant nutrients, vitamins, minerals for optimal health through our products"
    }
];

class Process extends Component {
    componentDidMount() {
        new WOW().init(); 
    }
    render() {
        return (
            <div className="container-fluid mb-5 ">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">Where Quality Meets Commitment </h5>
                    <h2 className="title">Nourishing Lives with Trusted Nutrition</h2>
                    <p className="subtitle">
                    Experience the goodness of high nutritional value and affordability with Tenali Double Horse. Elevate your breakfast routine with our superior products.
                    </p>
                </div>

                <div className="row1-container four-philers">
                   
                            <div className="box box-down cyan wow animate__animated animate__fadeInUp" >
                                <h2>Superior Quality</h2>
                                <p className='content-justify'>Delivering excellence in every bite , High-quality standards in terms of freshness, purity, and taste.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Quality.png"} alt="topicon" />
                            </div>
                        

                      
                            <div className="box red wow animate__animated animate__fadeInUp" >
                                <h2>Trusted Brand</h2>
                                <p className='content-justify'>Building trust with our customers by consistently delivering exceptional quality and reliability.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Trusted.png"} alt="topicon" />
                            </div>
                        
                       
                            <div className="box box-down blue wow animate__animated animate__fadeInUp" >
                                <h2>High Nutritional Value</h2>
                                <p className='content-justify'>Abundant nutrients, vitamins, minerals for optimal health through our products.</p>
                                <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Nutritional.png"} alt="topicon" />
                            </div>
                        
                </div>

                <div className="row2-container">
                    <div className="box orange wow animate__animated animate__fadeInUp" >
                        <h2>Affordable</h2>
                        <p className='fontcolor content-justify'>Premium Urad Dal at Affordable prices. Elevate your Daily Routine without compromising on quality. Your satisfaction, our priority.</p>
                        <img className="box-img" src={process.env.PUBLIC_URL + "/assets/img/home/Affordable.png"} alt="topicon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Process;
