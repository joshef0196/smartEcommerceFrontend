import React from 'react'   
export default function Footer() {
    return (
        <div>  
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget widget-about">
                                    <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

                                    <div className="social-icons">
                                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></a>
                                    </div> 
                                </div> 
                            </div> 

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4> 

                                    <ul className="widget-list">
                                        <li><a href="/about">About Smart</a></li>
                                        <li><a href="#">How to shop on Smart</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="/contact-us">Contact us</a></li>
                                        <li><a href="login.html">Log in</a></li>
                                    </ul> 
                                </div> 
                            </div> 

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4> 

                                    <ul className="widget-list">
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back guarantee!</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul> 
                                </div> 
                            </div> 

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4> 

                                    <ul className="widget-list">
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="cart.html">View Cart</a></li>
                                        <li><a href="/wishlist">My Wishlist</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © 2024 Smart Store. All Rights Reserved.</p>
                        <figure className="footer-payments">
                            <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20" />
                        </figure> 
                    </div> 
                </div> 
            </footer> 
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>

            {/* Mobile Menu */}
            <div className="mobile-menu-overlay"></div>{/* End .mobil-menu-overlay */}

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li><a href="/">Home</a> </li>
                            <li> <a href="/shop">Shop</a></li>
                            <li> <a href="/category">Product Category</a></li> 
                            <li> <a href="/blogs">Blog</a></li> 
                            <li> <a href="/about">About Us</a></li>  
                        </ul>
                    </nav>{/* End .mobile-nav */}

                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}

            {/* Sign in / Register Modal */}
            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Username or email address *</label>
                                                    <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                                                </div>{/* End .form-group */}

                                                <div className="form-group">
                                                    <label htmlFor="singin-password">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                                                </div>{/* End .form-group */}

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>{/* End .custom-checkbox */}

                                                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="register-email" required />
                                                </div>{/* End .form-group */}

                                                <div className="form-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="register-password" required />
                                                </div>{/* End .form-group */}

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                                    </div>{/* End .custom-checkbox */}
                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                    </div>{/* End .tab-content */}
                                </div>{/* End .form-tab */}
                            </div>{/* End .form-box */}
                        </div>{/* End .modal-body */}
                    </div>{/* End .modal-content */}
                </div>{/* End .modal-dialog */}
            </div>{/* End .modal */} 
        </div>
    )
} 