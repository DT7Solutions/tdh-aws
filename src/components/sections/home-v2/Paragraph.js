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
      <div className="section   ">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-lg-30">
              <img src={process.env.PUBLIC_URL + "/assets/img/misc/Suma-1600x1279.webp"} alt="img" />
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
                {/* <button onClick={this.handleSaveChanges} className="btn-custom">Download brochure</button> */}
                {/* <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Enter Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Phone No" />
      </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn-custom btn btn-sm" onClick={this.handleClose}>
              Close
            </button>
            <button className="btn-custom btn btn-sm" onClick={this.handleSaveChanges}>
              Save Changes
            </button>
          </Modal.Footer>
                </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;
