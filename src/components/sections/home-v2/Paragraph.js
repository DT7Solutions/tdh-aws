import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pdffile from '../../layouts/tdh-brouchure.pdf'

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }


  // handleSaveChanges = () => {
  //   const content = 'Hello, this is a PDF!'; // Replace this with the content you want in the PDF

  //   // Convert the content to a Blob
  //   const pdfBlob = new Blob([content], { type: 'application/pdf' });

  //   // Create a download link
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = URL.createObjectURL(pdfBlob);
  //   downloadLink.download = 'my_document.pdf';
  //   downloadLink.click();

  //   // Close the modal after saving
  //   this.handleClose();
  // };
  handleSaveChanges = () => {
    try {
    
      const pdfUrl = process.env.PUBLIC_URL + "/assets/img/people/tdh-brouchure.pdf";
  
      // Open the PDF file URL in a new tab
      window.open(pdfUrl, '_blank');
  
      // Close the modal after saving
      this.handleClose();
    } catch (error) {
      console.error('Error opening PDF:', error);
      // Handle error if needed
    }
  };
  
  

  render() {
    const { show } = this.state;

    return (
      <div className="section" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/tdh-Suma-download-brochure-background.png)" }}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-lg-30">
              <img src={process.env.PUBLIC_URL + "/assets/img/misc/tdh-suma-section.jpeg"} alt="img" />
            </div>
            <div className="col-lg-6">
              <div className="section-title-wrap mr-lg-30 text-center">
                <h5 className="custom-primary">Explore Our Story</h5>
                <h2 className="title">Download Our  Brochure</h2>
                <p className="subtitle mb-3" style={{ textAlign: 'justify' }}>
                Delve into the essence of Tenali Double Horse with our comprehensive company brochure. Uncover our heritage, products, and commitment to quality in this informative guide.
                </p>
                <a
                  href={pdffile}
                  download="tdh-brouchure.pdf"
                  className="btn-custom btn-sm shadow-none suma"
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
    );
  }
}

export default Paragraph;
