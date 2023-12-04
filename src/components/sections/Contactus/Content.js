import React, { Component, Fragment } from 'react';
// import location from '../../../data/restaurant.json';
import L from 'leaflet';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Factorylocation from './Factorylocation';
import Messenger from '../home/Messenger';
import Feedback from '../home/Feedback';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';




const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
          isSubmitted: false,
          formData: {
            fname: '',
            lname: '',
            email: '',
            Phonenumber: '',
            purpose: '',
            subject: '',
            message: '',
          },
         
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
        }));
      };

      // handleRecaptchaChange = (value) => {
      //   this.setState({ recaptchaValue: value });
      // };

      sendEmail = async (e) => {
        e.preventDefault();
        // const recaptchaValue = this.recaptchaRef.current.getValue(); // Get the reCAPTCHA value

        // if (!recaptchaValue) {
          
        //   console.error("Please complete the reCAPTCHA");
        //   return;
        // }
    
        try {
          await emailjs.sendForm('service_u0jehlt', 'template_3b2mxe5', this.form.current, 'cjCRUWDX0cKAQSKL6')
          
          // Reset the form fields
          this.setState((prevState) => ({
            formData: {
              fname: '',
              lname: '',
              email: '',
              Phonenumber: '',
              purpose: '',
              subject: '',
              message: '',
            },
            isSubmitted: true,
           
          }));
          alert("Message successfully sent!");
        } catch (error) {
          console.log(error.text);
        }
      };
    
    render() {
        const { formData, isSubmitted } = this.state;
        return (
            <Fragment>
            
            <div className="section" style={{ paddingBottom: '0px' }}>

              <div className="fluid-container locations-wrapper">
                <div className="container">
                  <div className="section-title-wrap text-center mb-5">
                    <h5 className="custom-primary">Connect with Us</h5>
                    <h2 className="title">Reach Out to Tenali Double Horse</h2>
                    <p className="subtitle">
                      Find our corporate and factory addresses along with contact information. We're here to assist you. Feel free to get in touch for inquiries, feedback, or any assistance you need.
                    </p>
                  </div>
                  <div className="row  p-2">
                    <div className="col-lg-7  mb-lg-5 ">

                      <div className="row row-cols-1 row-cols-md-2">
                        <div className="col-lg-12 col-md-12  col-sm-12   ">
                          <div className="row  top-row">
                            <div className="col-lg-6  col-sm-12 mb-3 d-flex email-toll-card1">
                              <div><i className='fas fa-envelope mt-3 phone-email' style={{ fontSize: '30px', color: 'white' }} /></div> &nbsp;
                              <div className='mt-1'>Email<h5 className="card-title"> <a href="mailto: info@tenalidoublehorse.com">info@tenalidoublehorse.com</a></h5></div>
                            </div>
                            <div className="col-lg-6  col-sm-12   mb-3 d-flex email-toll-card2">
                              <div><i className='fas fa-phone-volume mt-3 phone-icon' style={{ fontSize: '33px', color: '#ED4E53' }} /></div> &nbsp;
                              <div className='mt-1'>Toll Free Number<h5 className="card-title"> <a href="tel: 1800 270 567567">1800 270 567567</a></h5></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className='container'> */}

                      <div className="col-lg-12 pt-3 pb-3 mb-3 shadow " style={{ borderRadius: '8px' }}>
                        <h5 className="custom-primary">Regional Office Address</h5>
                        <p><i className='fas fa-phone pr-2' style={{ fontSize: '20px', color: '#7e8083' }} /> +91 9666389389</p>
                        <div className='d-flex'>
                          <div>
                            <i class='fas fa-location-arrow pr-2' style={{ fontSize: '20px', color: '#7e8083', textAlign: "justify" }} />
                          </div>
                          <div>
                            <p> JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills,
                              Jubilee Hills, Hyderabad, Telangana 500033</p>
                          </div>
                        </div>


                        <button type="button" className="btn-custom btn-sm order-btn">
                          <a href="https://goo.gl/maps/XiEweexpzdsBQoC96" target='_blank'>Get directions</a>
                        </button>
                      </div>

                      <div className="col-lg-12 pt-3 pb-3 mb-5 shadow bg-rounded " style={{ borderRadius: '8px' }}>
                        <h5 className="custom-primary">Factory  Address</h5>
                        <p><i className='fas fa-phone pr-2' style={{ fontSize: '20px', color: '#7e8083' }} /> +91 9666389389</p>
                        <div className='d-flex'>
                          <div>
                            <i class='fas fa-location-arrow pr-2' style={{ fontSize: '20px', color: '#7e8083', textAlign: "justify" }} />
                          </div>
                          <div>
                            <p> Nandivelugu, Nandivelugu (Post) 522 306 TENALI,   Guntur Dist, A.P</p>
                          </div>
                        </div>


                        <button type="button" className="btn-custom btn-sm order-btn">
                          <a href="https://goo.gl/maps/kFJS3WnhyJWUNGbu5" target='_blank'>Get directions</a>
                        </button>
                      </div>

                      {/* </div> */}


                    </div>
                    <div className="col-lg-5 ">
                      <div className="row  top-row">
                        <div className="col-lg-12 col-sm-12 mb-3 p-2 d-flex email-toll-card3 pb-3" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                          <div><i className='fas fa-file-invoice mt-3 mr-3 phone-icon' style={{ fontSize: '28px', color: ' #ED4E53', marginLeft:'10px' }} /></div> &nbsp;
                          <div> <h5 className="text-white mb-0 mt-2"> We Value Your Input</h5></div>



                        </div>
                      </div>


                      <div><form className='mb-5 shadow p-2' style={{borderRadius:'8px'}} ref={this.form} onSubmit={this.sendEmail}>
                          <div className="row">
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="First Name"
                                required
                                className="form-control"
                                name="fname"
                                pattern="[A-Za-z]+"
                                value={formData.fname}
                                onChange={this.handleInputChange}
                              />
                              
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Last Name"
                                required
                                className="form-control"
                                name="lname"
                                pattern="[A-Za-z]+"
                                value={formData.lname}
                                onChange={this.handleInputChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">

                              <input
                                type="text"
                                placeholder="Email Address"
                                required
                                className="form-control"
                                name="email"
                                value={formData.email}
                                pattern=".\.com."
                                onChange={this.handleInputChange}
                               
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Phone no"
                                required
                                className="form-control"
                                name="Phonenumber"
                                value={formData.Phonenumber}
                                onChange={this.handleInputChange}
                                pattern="[0-9]*"
                                maxLength="10"
    
                              />

                            </div>
                            <div className="form-group col-lg-6">
                              <select
                                className="form-control"
                                name="purpose"
                                required
                                value={formData.purpose}
                                onChange={this.handleInputChange}
                              >
                                <option value="" disabled>Purpose of Contact</option>
                                <option value="export">Export</option>
                                <option value="distribution">Distribution Enquiry</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Suggestions">Suggestions</option>
                                <option value="Other">Job Enquiry</option>
                              </select>
                            </div>
                            <div className="form-group col-lg-12">
                              <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="form-control"
                                name="subject"
                                value={formData.subject}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea
                                name="message"
                                className="form-control"
                                required
                                placeholder="Type your message"
                                rows={3}
                                value={formData.message}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                          </div>
                          {/* <div className="" >
          <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LcwDQcoAAAAAIkSarHAe3BinIu75WQ0Ay26ypbP"
          />
        </div> */}

                          <button type="submit" value="Send" className="btn-custom primary mt-3" name="button">Send Message</button>
                        </form>
                        {/* <form className='mb-5' ref={this.form} onSubmit={this.sendEmail}>
                          <div className="row">
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="First Name"
                                required
                                className="form-control"
                                name="fname"
                                pattern="[A-Za-z]+"
                                value={formData.fname}
                                onChange={this.handleInputChange}
                              />
                              
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Last Name"
                                required
                                className="form-control"
                                name="lname"
                                pattern="[A-Za-z]+"
                                value={formData.lname}
                                onChange={this.handleInputChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">

                              <input
                                type="text"
                                placeholder="Email Address"
                                required
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={this.handleInputChange}
                                pattern=".*\.com.*"
                               
                                
                               
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Phone no"
                                required
                                className="form-control"
                                name="Phonenumber"
                                value={formData.Phonenumber}
                                onChange={this.handleInputChange}
                                pattern="[0-9]*"
                                maxLength="10"
    
                              />

                            </div>
                            <div className="form-group col-lg-6">
                              <select
                                className="form-control"
                                name="purpose"
                                required
                                value={formData.purpose}
                                onChange={this.handleInputChange}
                              >
                                <option value="" disabled>Purpose of Contact</option>
                                <option value="export">Export</option>
                                <option value="distribution">Distribution Enquiry</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Suggestions">Suggestions</option>
                                <option value="Other">Job Enquiry</option>
                              </select>
                            </div>
                            <div className="form-group col-lg-12">
                              <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="form-control"
                                name="subject"
                                value={formData.subject}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea
                                name="message"
                                className="form-control"
                                required
                                placeholder="Type your message"
                                rows={3}
                                value={formData.message}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                          </div>
                          {/* <div className="" >
          <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LcwDQcoAAAAAIkSarHAe3BinIu75WQ0Ay26ypbP"
          />
        </div> */}

                          {/* <button type="submit" value="Send" className="btn-custom primary mt-3" name="button">Send Message</button> */}
                        {/* </form> */}

                      </div>
                    </div>
                  </div>
                </div>


                <Factorylocation />
              </div>
            </div>
            <Messenger/>
            <Feedback/>
            </Fragment>
        );
    }
}

export default Content;