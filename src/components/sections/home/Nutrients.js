import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import WOW from 'wow.js';
import 'animate.css';
import pdffile from '../../layouts/M2-Brouchure.pdf'
import { pizzamenu } from '../../../data/menu.json';

class Nobalactivity extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
     
    render() {
        return (
            <div className="container-fluid  notabule-sec" style={{backgroundImage:`url(${process.env.PUBLIC_URL} + /assets/img/banner/icons/ganesh-bg.jpg)`}}>
         
            <h2 className='title text-center pb-4'>Premium Desi Urad Chakki Dall </h2>
          

            <div class="why-choose-section ">
                    <div class="container">
                        <div class="row d-flex justify-content-between align-items-center pb-5">
                            <div class="col-lg-6 ">
                               
                       
                          
                        <h5 class=" custom-primary text-center">Key Benefits of M2 </h5>
                        <div className="row" >
                       
                                {/* <div class="col-xl-12"><div class="ct-info-box"><i   class="fas fa-store"></i><h5>Available in Bangalore  <br />Siri Enterprises</h5><span>Give us a call:-</span><div className='mt-3' style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}><span><a href="" className=" btn-sm btn-custom">+91 95901 95143</a></span><span><a href="" className=" btn-sm btn-custom"> +91 99802 06366</a></span><span><a href="" className=" btn-sm btn-custom">+91 88977 55007 </a></span></div></div></div> */}
                                {/* <div class="col-xl-12"><div class="ct-info-box"><i   class="fas fa-store"></i><h5>Siri Enterprises</h5><div style={{display:'flex',flexWrap:'wrap'}}><div className='col-lg-3  pr-0 pl-0'><span className='m2-font'>Give us a call :- </span></div><div className='col-lg-9 pr-0 pl-0'><span>Lakshmi narayana :- +91 95901 95143, </span><br/><span> K Jayanth Pavan :- +91 9980206366,</span><br/><span>Ajay :- +91 8897755007 .</span></div></div></div></div> */}
                                {pizzamenu.map((item, i) => (
                                    // <div key={i} className="col-lg-6">
                                    <div key={i} className={`col-lg-6 ${item.title === "Naturally Processed" || item.title === "Packed Without Hand Touch" || item.title === "The Best In Quality, Taste" || item.title === "Processed In a first Fully Atomized Plant" ? "border-right" : ""}`}>
                                        <div className="ct-mini-menu-item" style={{display:'flex'}}>
                                            <div className="ct-mini-menu-bottom col-lg-4 col-3" style={{fontSize:'25px'}}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                                            </div>
                                            <div className="ct-mini-menu-top col-lg-8 col-9" style={{display:'flex',alignItems:'center'}}>
                                                <p className='m2-font'>{item.title}</p>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row" style={{display:'flex',flexWrap:'wrap',flexDirection:'column'}} >
                            <h5 class=" custom-primary text-center mb-1 mt-3">For Restaurants in Bangalore </h5>
                                <p className="subtitle text-center ">
                        Good News for You 
                        </p>
                                    <div className='col-lg-12 mb-3' style={{display:'flex',flexWrap:'wrap'}}>
                                <div class="col-lg-4 col-12 card-gap">
                    <div class="contact-box"><i class="fas fa-store"></i><p className='m2-font-contact'>Lakshmi Narayana</p><span className='contact-para'><a href='tel:+91 95901 95143' target='_blank'>+91 95901 95143</a>  </span></div>
                        </div>
                        <div class="col-lg-4 col-12 card-gap">
                        <div class="contact-box"><i class="fas fa-store"></i><p className='m2-font-contact'>K Jayanth Pavan</p><span className='contact-para'><a href='tel:+91 99802 06366' target='_blank'>+91 99802 06366</a> </span></div>
                        </div>
                        <div class="col-lg-4 col-12card-gap">
                        <div class="contact-box"><i class="fas fa-store"></i><p className='m2-font-contact'>Ajay</p><span className='contact-para'><a href='tel:+91 88977 55007' target='_blank'> +91 88977 55007</a> </span></div>
                        </div>
                        </div>
                        </div>    
                                
                    
                            </div>

                            <div class="col-lg-6">
                              
                                <div class="img-wrap3  ">
                                 
                                    <img  src={process.env.PUBLIC_URL + "/assets/img/banner/icons/m2-urad-chakki.webp"} alt="M2" class="img-fluid"  />
                                </div>
                                <div className=' text-center'>
                                <a
                                    href={pdffile}
                                    download="M2-Brouchure.pdf"
                                    rel="noopener noreferrer"
                                    className="btn-custom btn-sm shadow-none"
                                    target="_blank"
                                    type="application/pdf"
                                    >
                                    Download Brochure
                                </a>
                               
                               
                               
                    
                                </div>
                            </div>

                        </div>



  
                        


                    </div>
                    
                </div>
          </div>
        );
    }
}

export default Nobalactivity;