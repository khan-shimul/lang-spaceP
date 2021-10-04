import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container overflow-hidden">
                <div className="row footer p-5 mt-4">
                    <div className="col-md-4">
                        <h1>Lang_Space</h1>
                        <p className="short-footer">Lang Space is a Language learning platform. So Learn New Languages  And Move Forward</p>
                        <p><small>All reserved &copy Copyright 2021 - 2025 </small></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h1>Links</h1>
                        <div className="links d-flex flex-column">
                            <Link to="/home"
                            >Home</Link>
                            <Link to="/about"
                            >About</Link>
                            <Link to="/services"
                            >Services</Link>
                            <Link to="/contact"
                            >Contact</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h1>Subscribe</h1>
                        <InputGroup className="mb-3 w-75">
                            <FormControl className="py-2"
                                placeholder="Your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <small className="text-secondary">Get the latest news and updates right at your inbox.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;