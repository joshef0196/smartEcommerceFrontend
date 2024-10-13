import React from 'react'

export default function Header() {
return (
    // <div> 
        <header className="header header-7">
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <a href="#">Usd</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">Eur</a></li>
                                    <li><a href="#">Usd</a></li>
                                </ul>
                            </div>{/* End .header-menu */}
                        </div>{/* End .header-dropdown */}

                        <div className="header-dropdown">
                            <a href="#">Eng</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Spanish</a></li>
                                </ul>
                            </div>{/* End .header-menu */}
                        </div>{/* End .header-dropdown */}
                    </div>{/* End .header-left */}

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                    <li><a href="/wishlist"><i className="icon-heart-o"></i>My Wishlist <span>(3)</span></a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</a></li>
                                </ul>
                            </li>
                        </ul>{/* End .top-menu */}
                    </div>{/* End .header-right */}
                </div>{/* End .container-fluid */}
            </div>{/* End .header-top */}

            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        
                        <a href="/" className="logo">
                            <img src="assets/images/logo.png" alt="Molla Logo" width="105" height="25" />
                        </a>

                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active"><a href="/">Home</a> </li>
                                <li> <a href="/shop">Shop</a></li>
                                <li> <a href="/category">Product Category</a></li> 
                                <li> <a href="/blogs">Blog</a></li> 
                                <li> <a href="/about">About Us</a></li> 
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search header-search-extended header-search-visible">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                </div>{/* End .header-search-wrapper */}
                            </form>
                        </div>{/* End .header-search */}
                        
                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>{/* End .product-cart-details */}

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>{/* End .product */}

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>{/* End .product-cart-details */}

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>{/* End .product */}
                                </div>{/* End .cart-product */}

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>{/* End .dropdown-cart-total */}

                                <div className="dropdown-cart-action">
                                    <a href="cart.html" className="btn btn-primary">View Cart</a>
                                    <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                                </div>{/* End .dropdown-cart-total */}
                            </div>{/* End .dropdown-menu */}
                        </div>{/* End .cart-dropdown */}
                    </div>{/* End .header-right */}
                </div>{/* End .container-fluid */}
            </div>{/* End .header-middle */}
        </header>
    // </div>
  )
}
