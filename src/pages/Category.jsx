import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Category() {
  return (
    <div>
        <Header />
        <main className="main">
        	<div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
        		<div className="container">
        			<h1 className="page-title">Product Category</h1>
        		</div>{/* End .container */}
        	</div>{/* End .page-header */}

            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li> 
                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                    </ol>
                </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}

            <div className="page-content">
                <div className="container">   
                    <div className="owl-carousel owl-simple" data-toggle="owl" 
                        data-owl-options='{
                            "nav": false, "dots": true, "margin": 20, "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
            			<div className="banner banner-cat">
                			<a href="#">
                				<img src="assets/images/category/4cols/banner-1.jpg" alt="Banner"/>
                			</a>

                			<div className="banner-content banner-content-static text-center">
                				<h3 className="banner-title">Women</h3>{/* End .banner-title */}
                				<h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
                				<a href="#" className="banner-link">Shop Now</a>
                			</div>{/* End .banner-content */}
            			</div>{/* End .banner */}

            			<div className="banner banner-cat">
                			<a href="#">
                				<img src="assets/images/category/4cols/banner-2.jpg" alt="Banner"/>
                			</a>

                			<div className="banner-content banner-content-static text-center">
                				<h3 className="banner-title">Men</h3>{/* End .banner-title */}
                				<h4 className="banner-subtitle">12 Products</h4>{/* End .banner-subtitle */}
                				<a href="#" className="banner-link">Shop Now</a>
                			</div>{/* End .banner-content */}
            			</div>{/* End .banner */}

            			<div className="banner banner-cat">
                			<a href="#">
                				<img src="assets/images/category/4cols/banner-3.jpg" alt="Banner"/>
                			</a>

                			<div className="banner-content banner-content-static text-center">
                				<h3 className="banner-title">Shoes & Boots</h3>{/* End .banner-title */}
                				<h4 className="banner-subtitle">15 Products</h4>{/* End .banner-subtitle */}
                				<a href="#" className="banner-link">Shop Now</a>
                			</div>{/* End .banner-content */}
            			</div>{/* End .banner */}

            			<div className="banner banner-cat">
                			<a href="#">
                				<img src="assets/images/category/4cols/banner-4.jpg" alt="Banner"/>
                			</a>

                			<div className="banner-content banner-content-static text-center">
                				<h3 className="banner-title">Accessories</h3>{/* End .banner-title */}
                				<h4 className="banner-subtitle">8 Products</h4>{/* End .banner-subtitle */}
                				<a href="#" className="banner-link">Shop Now</a>
                			</div>{/* End .banner-content */}
            			</div>{/* End .banner */}

            			<div className="banner banner-cat">
                			<a href="#"> <img src="assets/images/category/4cols/banner-1.jpg" alt="Banner"/> </a>

                			<div className="banner-content banner-content-static text-center">
                				<h3 className="banner-title">Women</h3>{/* End .banner-title */}
                				<h4 className="banner-subtitle">18 Products</h4>{/* End .banner-subtitle */}
                				<a href="#" className="banner-link">Shop Now</a>
                			</div>{/* End .banner-content */}
            			</div>{/* End .banner */}
        			</div>{/* End .banners-carousel owl-carousel owl-simple */}
 
                </div>{/* End .container */} 
				 
            </div>{/* End .page-content */}
 
        </main>{/* End .main */} 
        <Footer />
    </div>
  )
}
