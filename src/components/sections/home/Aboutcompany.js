import React, { Component } from 'react';
// import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';

class TimelineSection extends Component {

    
    componentDidMount() {
        AOS.init({
            duration: 1500, 
        });
    }

    
    render() {
        const backgroundStyles = {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/light-yellow.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            paddingTop:'30px'
            
            
          };


          
        return (
            <section id="timeline " style={{...backgroundStyles}}>
                <h5 className="custom-primary text-center white-bg  mb-5  mx-auto" style={{textAlign:"center"}}>Founder Message</h5>
        {/* <h2 className="title text-center">A Timeline of Growth, Innovation, and Impact</h2> */}
        
            
                <div className="fluid-container video-conatiner mt-3">
                       
                   
                    
                    <div className="row ourstory-section text-center"  >
                      <div className='col-lg-8 col-12' >
                       
                      
                      {/* <ReactPlayer
            url={"./assets/video/tdh-our-story.mp4"}
            controls poster={process.env.PUBLIC_URL + "/assets/img/misc/great-place-to-work.png"}
            width="100%"
            height="100%"
          /> */}
           <video className='shadow p-1 mb-5 bg-white rounded image-radius' width="100%" height="95%" controls poster={process.env.PUBLIC_URL + "/assets/img/misc/ourstory.png"}>
                          <source src={process.env.PUBLIC_URL + "./assets/video/tdh-our-story.mp4"} type="video/mp4" />
                      </video>
                <h2 className="title text-center mt-2">Tenali Double Horse</h2> 
                <p> At Teanli Double Horse  Our Journey Begins in 2005 with avision to bring excellence  and trust to every Household in india Guided by our commitment to quality and customer Satisfication , we have since Become a trusted name that resonates with millions </p> 
                <a
                  
                 
                  className="btn-custom btn-sm shadow-none suma mb-5 "
                  target="_blank"
                 
                >
                  READ OUR STORY
                </a>    
                      </div>
                    </div>
                </div>

               
                    
            </section>
        );
    }
}

export default TimelineSection;
