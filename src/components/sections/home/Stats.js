import React, { Component } from 'react';
import WOW from 'wow.js';
import 'animate.css';


const successpost = [
    {
        icon: "fas fa-medal",
        count: 18,
        title: "Years of Experience",
        delay:"0.4s"
    },
    {
        icon:  "fas fa-globe",
        count: 12,
        title: "Total countries",
        delay:"0.6s"
    },
   
    {
        icon:  "fas fa-map",
        count: 18,
        title: "States",
        delay:"0.8s"
    },
    
    {
        icon:"fas fa-box-open",
        count: 10,
        title: "Products",
        delay:"0.9s"
    }
    
]

class stats extends Component {
    componentDidMount() {
        new WOW().init(); 
    }
    render() {
        return (
            <div className="section section-padding  bg-cover bg-center  " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories/stats-banner.png)" }} >
                <div className="container" >
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title text-white">Empowering Progress</h2>
                        <p className="subtitle text-white">
                        Explore the statistics that define Tenali Double Horse's journey. From years of excellence to a growing customer base, discover the metrics that highlight our commitment to quality and growth.
                        </p>
                    </div>
                    <div className="row ">
                        {successpost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay={item.delay}>
                                <div className="ct-infographic-item">
                                    <i className={item.icon} />
                                    <h4>{new Intl.NumberFormat().format(item.count)}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default stats;