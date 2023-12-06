import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
// import Banner from '../home-v3/Banner';
// import Banner from '../home/Banner';
import Banner from '../home-v2/Banner';
// import Banner  from '../home/Banner-demo';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
// import CubeSlider from "../home-v2/Cubeslider"
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Process from '../home-v2/Process';
import Lazyload from '../home-v3/Lazyload';
// import Nobalactivity from './Nobalactivity';
import Camapaing  from './Camapaing';
import Paragraph from '../home-v2/Paragraph';
import Reviews from './Reviews';
import Feedback from './Feedback';
// import Instagram from './Instagram';
import Messenger from './Messenger';
import Nutrients from './Nutrients'
import Benefits from '../home-v2/Benefits';
// import Benefits from '../home-v2/Whychoose'
import Latestproducts from './Latestupdate';




class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany />
                <Process />
                <Nutrients/>
                {/* <Nobalactivity /> */}
                {/* <Instagram/> */}
                {/* <Camapaing/> */}
                <Latestproducts/>
               

               
                <Benefits/>
                {/* <CubeSlider/> */}

                <Menuitems />

                <Productcards />
                <Stats />

                <Paragraph />
                <Lazyload />
                <Reviews/>

                <Socialmedia />
                <Feedback/>
                <Messenger/>
               
              
            </Fragment>
        );
    }
}

export default Content;