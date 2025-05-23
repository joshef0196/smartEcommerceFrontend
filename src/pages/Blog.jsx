import React from 'react' 

export default function Blog() {
  return (
    <div> 
        <main className="main">
        	<div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
        		<div className="container">
        			<h1 className="page-title">Blog</h1>
        		</div>{/* End .container */}
        	</div>{/* End .page-header */}
          
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li> 
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}

            <div className="page-content">
                <div className="container">
                	<div className="row">
                		<div className="col-lg-9">
                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/listing/post-1.jpg" alt="image desc"/>
                                            </a>
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 22, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">2 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Cras ornare tristique elit.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Lifestyle</a>,
                                                <a href="#">Shopping</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}

                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media entry-video">
                                            <a href="single.html">
                                                <img src="assets/images/blog/listing/post-2.jpg" alt="image desc"/>
                                            </a>
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 20, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">3 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Facilisis aliquam porttitor mauris sit  amet orci.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Lifestyle</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ... </p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}

                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media">
                                            <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/listing/post-3.jpg" alt="image desc"/>
                                                </a>
                                                <a href="single.html">
                                                    <img src="assets/images/blog/listing/post-1.jpg" alt="image desc"/>
                                                </a>
                                            </div>{/* End .owl-carousel */}
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 17, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">0 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Utaliquam sollicitudin leo.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Lifestyle</a>,
                                                <a href="#">Shopping</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ... </p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}

                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/listing/post-4.jpg" alt="image desc"/>
                                            </a>
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">Jane Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 12, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">4 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Fusce pellentesque suscipit.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Travel</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat eget felis ... </p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}

                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/listing/post-5.jpg" alt="image desc"/>
                                            </a>
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 11, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">0 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Donec nec justo eget felis facilisis  fermentum.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Hobbies</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ligula vulputate sem ...</p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}

                            <article className="entry entry-list">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <figure className="entry-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/listing/post-6.jpg" alt="image desc"/>
                                            </a>
                                        </figure>{/* End .entry-media */}
                                    </div>{/* End .col-md-5 */}

                                    <div className="col-md-7">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">Hans Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 10, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">0 Comments</a>
                                            </div>{/* End .entry-meta */}

                                            <h2 className="entry-title">
                                                <a href="single.html">Quisque volutpat mattiseros.</a>
                                            </h2>{/* End .entry-title */}

                                            <div className="entry-cats">
                                                in <a href="#">Travel</a>,
                                                <a href="#">Hobbies</a>
                                            </div>{/* End .entry-cats */}

                                            <div className="entry-content">
                                                <p>Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ...</p>
                                                <a href="single.html" className="read-more">Continue Reading</a>
                                            </div>{/* End .entry-content */}
                                        </div>{/* End .entry-body */}
                                    </div>{/* End .col-md-7 */}
                                </div>{/* End .row */}
                            </article>{/* End .entry */}


                			<nav aria-label="Page navigation">
							    <ul className="pagination">
							        <li className="page-item disabled">
							            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">
							                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
							            </a>
							        </li>
							        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
							        <li className="page-item"><a className="page-link" href="#">2</a></li>
							        <li className="page-item">
							            <a className="page-link page-link-next" href="#" aria-label="Next">
							                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
							            </a>
							        </li>
							    </ul>
							</nav>
                		</div>{/* End .col-lg-9 */}

                		<aside className="col-lg-3">
                			<div className="sidebar">
                				<div className="widget widget-search">
                                    <h3 className="widget-title">Search</h3>{/* End .widget-title */}

                                    <form action="#">
                                        <label htmlFor="ws" className="sr-only">Search in blog</label>
                                        <input type="search" className="form-control" name="ws" id="ws" placeholder="Search in blog" required />
                                        <button type="submit" className="btn"><i className="icon-search"></i><span className="sr-only">Search</span></button>
                                    </form>
                				</div>{/* End .widget */}

                                <div className="widget widget-cats">
                                    <h3 className="widget-title">Categories</h3>{/* End .widget-title */}

                                    <ul>
                                        <li><a href="#">Lifestyle<span>3</span></a></li>
                                        <li><a href="#">Shopping<span>3</span></a></li>
                                        <li><a href="#">Fashion<span>1</span></a></li>
                                        <li><a href="#">Travel<span>3</span></a></li>
                                        <li><a href="#">Hobbies<span>2</span></a></li>
                                    </ul>
                                </div>{/* End .widget */}

                                <div className="widget">
                                    <h3 className="widget-title">Popular Posts</h3>{/* End .widget-title */}

                                    <ul className="posts-list">
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-1.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 22, 2018</span>
                                                <h4><a href="#">Aliquam tincidunt mauris eurisus.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-2.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 19, 2018</span>
                                                <h4><a href="#">Cras ornare tristique elit.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-3.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 12, 2018</span>
                                                <h4><a href="#">Vivamus vestibulum ntulla nec ante.</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <a href="#">
                                                    <img src="assets/images/blog/sidebar/post-4.jpg" alt="post"/>
                                                </a>
                                            </figure>

                                            <div>
                                                <span>Nov 25, 2018</span>
                                                <h4><a href="#">Donec quis dui at dolor  tempor interdum.</a></h4>
                                            </div>
                                        </li>
                                    </ul>{/* End .posts-list */}
                                </div>{/* End .widget */}

                                <div className="widget widget-banner-sidebar">
                                    <div className="banner-sidebar-title">ad box 280 x 280</div>{/* End .ad-title */}
                                    
                                    <div className="banner-sidebar banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/blog/sidebar/banner.jpg" alt="banner"/>
                                        </a>
                                    </div>{/* End .banner-ad */}
                                </div>{/* End .widget */}

                                <div className="widget">
                                    <h3 className="widget-title">Browse Tags</h3>{/* End .widget-title */}

                                    <div className="tagcloud">
                                        <a href="#">fashion</a>
                                        <a href="#">style</a>
                                        <a href="#">women</a>
                                        <a href="#">photography</a>
                                        <a href="#">travel</a>
                                        <a href="#">shopping</a>
                                        <a href="#">hobbies</a>
                                    </div>{/* End .tagcloud */}
                                </div>{/* End .widget */}

                                <div className="widget widget-text">
                                    <h3 className="widget-title">About Blog</h3>{/* End .widget-title */}

                                    <div className="widget-text-content">
                                        <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
                                    </div>{/* End .widget-text-content */}
                                </div>{/* End .widget */}
                			</div>{/* End .sidebar */}
                		</aside>{/* End .col-lg-3 */}
                	</div>{/* End .row */}
                </div>{/* End .container */}
            </div>{/* End .page-content */}
        </main>{/* End .main */} 
    </div>
  )
}
