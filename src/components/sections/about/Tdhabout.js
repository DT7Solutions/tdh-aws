import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper';
// Install Swiper modules
SwiperCore.use([Autoplay]);


class Aboutcompany extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
    
     
    
      
    render() {
  
        return (
          <div className='origins-main-section'>
            <div className="container">
              <div className="origins-section">
                <div className='pt-5 pb-5'>
                    <h5 className="custom-primary text-center white-bg mx-auto ">Unveilling Our Origins</h5>
                    <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2>
                  </div>
                
                  <div className='mb-4'>
                  <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  navigation={false}
                >
                  <SwiperSlide>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">THE BEGINNING</h3>
                          <p>Tenali Double Horse, renowned for high-quality dals and ready-to-eat products, started in 2005 when Shri Munagala Krishnamurthy planted a seed in Tenali, Andhra Pradesh. His care nurtured Sri Krishnamurthy's Mahendra Dall Mill, supplying premium urad dall in 50-kilogram packs.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-1.png"} alt="img" />
                      </div>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row d-flex">
                      <div className='col-sm-12 col-lg-6 d-flex align-items-center'>
                        <div className=''>
                          <h3 className="text-start">THE BEGINNING</h3>
                          <p>Tenali Double Horse, renowned for high-quality dals and ready-to-eat products, started in 2005 when Shri Munagala Krishnamurthy planted a seed in Tenali, Andhra Pradesh. His care nurtured Sri Krishnamurthy's Mahendra Dall Mill, supplying premium urad dall in 50-kilogram packs.</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-lg-6'>
                          <img src={process.env.PUBLIC_URL + "/assets/img/about/slider-1.png"} alt="img" />
                      </div>
                    </div>

                  </SwiperSlide>
                </Swiper>
                  </div>
             

              </div>
            </div>
          </div>
        );
    }
}

export default Aboutcompany;