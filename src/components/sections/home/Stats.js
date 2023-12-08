import React, { Component } from 'react';
import WOW from 'wow.js';
import 'animate.css';


const successpost = [
    {
        icon: "flaticon-medal",
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
        icon: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 86V42.5M46 86L9.56983 68.2772C9.22193 68.108 9.00287 67.7532 9.00737 67.3664L9.5 25M46 86L82.4302 68.2772C82.7781 68.108 82.9971 67.7532 82.9926 67.3664L82.5 25M46 42.5L42 40.5M46 42.5L55 38.5M37.5 38.5L9.5 25M9.5 25L24 18M82.5 25L46.4454 7.21963C46.1648 7.08127 45.8357 7.08217 45.5559 7.22207L34 13M82.5 25L70 31.25M60.5 36V48.882C60.5 49.6253 61.2823 50.1088 61.9472 49.7764L68.9472 46.2764C69.286 46.107 69.5 45.7607 69.5 45.382V31.5M60.5 36L69.5 31.5M60.5 36L24 18M69.5 31.5L70 31.25M24 18L34 13M34 13L70 31.25" stroke="black" stroke-linecap="round"/>
            </svg>
        ),
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
            <div className="section section-padding  bg-cover bg-center  " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories/stats-tdh.png)" }} >
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
                                <div className="ct-infographic-item card pt-3 pb-3 with-border-bottom border-0 shadow rounded-3">
                                    <i className={item.icon} style={{color:'#DE7E76'}} />
                                    <h4 className='text-dark' style={{fontWeight:'800'}}>{new Intl.NumberFormat().format(item.count)}</h4>
                                    <p className='text-dark' style={{fontWeight:'800'}}>{item.title}</p>
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