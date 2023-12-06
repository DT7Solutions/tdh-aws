import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = "https://www.amazon.in/dp/B0CCJ825SX?ref=myi_title_dp"


class Camapaing extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div>
            <div className='container mb-5'>
                    <div>
                        {/* <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                            <h5 className="custom-primary mt-3">Campaign Chronicles  </h5>
                            <h2 className="title">Explore Our Ongoing Campaigns</h2>
                            <p className="subtitle ">
                                Discover the latest buzz in the digital realm. Dive into our ongoing digital or PR campaigns that bring you exciting updates, engaging content, and a taste of the future with Tenali Double Horse.
                            </p>
                        </div> */}
                         <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                            <h5 className="custom-primary mt-3">Unleashing Cricket Fever  </h5>
                            <h2 className="title">2023 World Cup Excitement</h2>
                            <p className="subtitle ">
                            Don't forget to grab your favorite Tenali Double Horse Rishika Sunnundalu and settle in for a rollercoaster ride of thrilling action. Let's come together as Team India supporters and celebrate the magic of cricket. 
                            </p>
                        </div>
                    </div>
              <div className='row d-flex justify-content-center campaing'>
                {/* <div className='col-lg-6 col-md-12 col-sm-12'>
                  
                    <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HNRT0BB78yk"
                frameborder="0"
                allowfullscreen
                loading="lazy"
              ></iframe>
              
                </div> */}
                <div className="col-lg-6 mb-lg-30" style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                        <video width="100%" height="95%" controls >
                          <source src={"/assets/video/tdh-cricket-world-cup.mp4"} type="video/mp4" />
                      </video>
                          
                        </div>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                    <div className='mb-lg-5 camp-content'>
                            <div>
                                    <p>
                                    {/* <b>Phir Se Udaan</b> is an initiative by your favourite <b>Tenali Double Horse</b> . With a vision to empower women inside and outside the house. Tenali Double Horse offers only the best quality and nutrition packed range of Dals and Instant foods like Idli and Dosa mixes. */}
                                    Experience the magic of cricket with <b>Rishika Sunnnadlu</b> in this captivating video! Get ready to cheer and believe as we bring you the excitement of the 2023 World Cup. Don't forget to have your favorite <b>Tenali Double Horse</b> snack by your side as you immerse yourself in the thrilling action. Let's celebrate cricket together and show our united support for <b>Team India!</b>
                                    </p>
                            </div>
                            <div>
                                    <a href={urls} target='_blank' className="btn-custom Register-campaining">Order Now</a>
                            </div>
                        </div>
                </div>
              </div>
            </div>
    
          </div>
        );
    }
}

export default Camapaing;