import {useEffect, useState} from "react";
import {fetchContactDetails} from "../js/api";
import {ContactDetails} from "../models";
import {Link} from "react-router-dom";
import {scrollToElement, scrollToTop} from "../js/constants";

export default function Footer() {
    const [contactDetails, setContactDetails] = useState(JSON.parse(localStorage.contactDetails || null) || ContactDetails);
    useEffect(() => {
        fetchContactDetails().then(res => {
            try {
                if (res.success) {
                    setContactDetails(res.data);
                } else {
                    throw Error(res.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        });
    }, []);
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>UpConstruction</h3>
                                    <p>
                                        {contactDetails.address}
                                        <br/>
                                        <br/>
                                        <strong>Phone:</strong> {contactDetails.phone_no}
                                        <br/>
                                        <strong>Email:</strong> {contactDetails.email}
                                        <br/>
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-twitter"/>
                                        </a>
                                        <a
                                            href={contactDetails.facebook_profile}
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-facebook"/>
                                        </a>
                                        <a
                                            href={contactDetails.instagram_profile}
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-instagram"/>
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <i className="bi bi-linkedin"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End footer info column*/}
                            <div className="col-lg-3 col-md-3 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollToTop}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={scrollToTop}>About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" onClick={scrollToTop}>Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={scrollToTop}>Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to="/track-shipment" onClick={scrollToTop}>Track Shipment</Link>
                                    </li>
                                    <li>
                                        <Link to="/policies" onClick={scrollToTop}>Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* End footer links column*/}
                            <div className="col-lg-3 col-md-3 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <Link to="/services" scroll-to="#service-1" onClick={scrollToElement}>Land Freight</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" scroll-to="#service-4" onClick={scrollToElement}>Reverse Supply Chain</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" scroll-to="#service-5" onClick={scrollToElement}>Hazardous Freight</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" scroll-to="#service-6" onClick={scrollToElement}>Integration</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" scroll-to="#service-7" onClick={scrollToElement}>Freight Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" scroll-to="#service-8" onClick={scrollToElement}>Exceptional cargo</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* End footer links column*/}
                            <div className="col-lg-2 col-md-3 footer-links" style={{display: 'none'}}>
                                <h4>Client Account</h4>
                                <ul>
                                    <li>
                                        <a href="#">Molestiae accusamus iure</a>
                                    </li>
                                    <li>
                                        <a href="#">Excepturi dignissimos</a>
                                    </li>
                                    <li>
                                        <a href="#">Suscipit distinctio</a>
                                    </li>
                                    <li>
                                        <a href="#">Dilecta</a>
                                    </li>
                                    <li>
                                        <a href="#">Sit quas consectetur</a>
                                    </li>
                                </ul>
                            </div>
                            {/* End footer links column*/}
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            © Copyright{" "}
                            <strong>
                                <span>UpConstruction</span>
                            </strong>
                            . All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ */}
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>
    );
}
