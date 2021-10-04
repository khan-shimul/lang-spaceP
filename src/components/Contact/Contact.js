import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TaglineContext } from '../../App';
import './Contact.css'

const Contact = () => {
    const tagline = useContext(TaglineContext)
    return (
        <div className="contact-container overflow-hidden">
            <div className="contact d-flex align-items-center">
                <div className="w-50 text-white pt-5 ps-5 support-banner">
                    <h1 className="support-title">We Are Always Ready To Assist You!</h1>
                    <p>Lang_Space offers online language courses to learn English, Spanish, French, Japanese and more. And if you have any doubts please dont hasitate to touch us.</p>
                </div>
            </div>
            <div className="row p-5 d-flex align-items-center">
                <div className="col-md-6">
                    <h2 className="text-primary">Get In Touch With Us</h2>
                    <p className="w-75">Lang_Space is a learn language from online platform. If you have any question or doubt please feel free to contact with us</p>
                    <address>
                        <div className="d-flex mb-4">
                            <div className="d-flex px-3">
                                <div><i class="fas fa-map-marker-alt me-2 address-icon"></i></div>
                                <div className="address-text"><p>California, USA</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i class="fas fa-phone-alt me-2 address-icon"></i></div>
                                <p className="address-text">(+321)81 718 981</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="d-flex px-3">
                                <div><i class="fas fa-fax me-2 address-icon"></i></div>
                                <div className="address-text"><p>(+00)98 174 569</p></div>
                            </div>
                            <div className="d-flex">
                                <div><i class="fas fa-envelope me-2 address-icon"></i></div>
                                <p className="address-text">space@gmail.com</p>
                            </div>
                        </div>
                        <small className="text-success text-center ms-5">{tagline}</small>
                    </address>
                </div>
                <div className="col-md-6 form-container">
                    <p className="ms-4 chat">Let's Cheat-Chat</p>
                    <Form className="frm">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                        </Form.Group>
                    </Form>
                    <Button className="btn btn-primary ms-4">Send Message</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;