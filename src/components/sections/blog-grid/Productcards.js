import React, { Component , } from 'react';
import WOW from 'wow.js';
import 'animate.css';


 class  Cards  extends Component {
  componentDidMount() {
    new WOW().init(); 
}
    render() {
        return (
  
        <section id="gallery" class="gap-section-top gold-idly " >
          <div className="section-title-wrap section-header text-center">
            <h5 className="custom-primary">Flavors of Excellence</h5>
            <h2 className="title">Discover Our Culinary Treasures</h2>
            <p>Indulge in a diverse range of superior quality products from Tenali Double Horse. From staples to specialties, explore the finest ingredients that elevate your meals to perfection</p>
          
        </div>
          <div class="container">
            <div class="row">
            <div class="col-lg-6 col-md-6 mb-4 wow animate__animated animate__fadeInUp "  data-wow-delay="0.2s">
            <div class="card alignments " style={{minHeight:'400px',backgroundColor:'transparent'}}>
            <img src={process.env.PUBLIC_URL + "/assets/img/home/tenali-double-horse-idly-rava.png"} style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Idly Rava</h5>
               
                <a href={"#menu-item-v1/9"} target='_blank' className="btn-custom btn-sm">Read more</a>
               
              </div>
             </div>
            </div>
          <div class="col-lg-6 col-md-6 mb-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.4s">
          <div class="card black alignments "  style={{minHeight:'400px',backgroundColor:'transparent'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/home/tenali-double-horse-urad-gota.png"} style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Urad gota</h5>
              
               <a href={"#menu-item-v1/1"} target='_blank' className="btn-custom btn-sm">Read more</a>
              
              </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 mb-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.6s">
          <div class="card white alignments "  style={{minHeight:'400px',backgroundColor:'transparent'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/home/tenali-double-horse-toor-dall.png"}  style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Toor Dall</h5>
               
                <a href={"#menu-item-v1/6"}  target='_blank' className="btn-custom btn-sm " >Read more</a>
               
              </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 pb-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.8s">
            <div class="card yellow alignments "  style={{minHeight:'400px',backgroundColor:'transparent'}} >
            <img src={process.env.PUBLIC_URL + "/assets/img/home/tenali-double-horse-moong-dall.png"}  style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Moong Dall</h5>
               
                <a href={"#menu-item-v1/7"} target='_blank'  className="btn-custom btn-sm " >Read more</a>
               
              </div>
             </div>
            </div>
          </div>
        </div>
        </section>
        
            
        );
    }
}

export default Cards;