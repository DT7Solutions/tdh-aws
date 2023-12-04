import React, { Component, Fragment } from 'react';
// import Aboutus from "../home/Aboutus";
import Tdhabout from './Tdhabout'
// import Infographics from "../home-v3/Infographics";
// import Newsletter from "../home-v2/Newsletter";
import Stats from '../home/Stats';
import Rules from './Rules';
// import MyComponent from '../home-v2/MyComponent';

import Greatplacetowork from '../blog-full/Greatplacetowork'
// import Cardhover from './Cardhover';
import Tdhgroup from './Tdhgroup';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
// import Ourstory  from '../home/Ourstory';
import Overview from "../about/Overview";
import Tdhf from './Tdhf';
// import HorizontalTimeline from './Horizontaltimeline';
// import TimelineComponent from "./Vertical"

class Content extends Component {
    render() {
        return (
            <Fragment>
               <Tdhabout/>
               <Tdhf/>
               {/* <Tdhgroup/> */}
               <Overview/>
                <Rules/>
              {/* <HorizontalTimeline/> */}
                
               {/* <TimelineComponent/> */}
                
                <Stats/>
               
                <Greatplacetowork/>
                <Feedback/>
                <Messenger/>
                
              
            </Fragment>
        );
    }
}

export default Content;