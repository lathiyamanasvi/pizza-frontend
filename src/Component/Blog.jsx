import React from 'react'
import Footer from './Landing/Footer'
import Header from './Landing/Header'
import { Link } from 'react-router-dom'
import { MdChevronRight } from "react-icons/md";
import { TiArrowRightOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="contact-bg">
                <div
                    style={{
                        backgroundImage: `url("https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog-bc.jpg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundBlendMode: "darken",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                >
                    <div className="container">
                        <div className="text-center" style={{ padding: "100px" }}>
                            <h1 class="text-white fw-bold" style={{ fontSize: "50px", padding: '5px 0' }}>Blog</h1>
                            <p className='text-white py-2 fs-6'><Link to='/home' className='text-white'>Home page</Link><MdChevronRight className='text-white' />Blog</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* grid */}
            <div>
                <div className="container p-5">
                    <div className="d-flex">
                        <div className="col-9">
                            <div class="card mb-3 border-0" style={{ width: "540px" }}>
                                <div class="g-0 d-flex">
                                    <div class="col-md-4">
                                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-820x620.jpg" class="rounded" alt="..." height="100%" width="100%"/>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="card-body">
                                            <p class="card-text text-muted" style={{fontSize:"12px"}}><span style={{color:"#C33130"}}>Startup . </span>October 19, 2023 . Comments (3)</p>
                                            <h3 class="card-title heading">Bite-sized Bliss: The World of Fast Food</h3>
                                            <p class="card-text"><small class="text-muted">Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex flex-column">
                                <div>
                                    <h4 className='border-bottom py-3'>SEARCH HERE </h4>
                                    <input type='text' placeholder='search' className='my-3' />
                                </div>
                                <div>
                                    <h4 className='border-bottom py-3'>RECENT POSTS </h4>
                                    <div class="card border-0">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-md-4">
                                                <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-150x150.jpg" class="img-fluid rounded" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <p class="card-text"><small class="text-muted mb-0">
                                                        OCTOBER 19, 2023</small></p>
                                                    <p class="text-hover">BITE-SIZED BLISS: THE WORLD OF FAST FOOD</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-0">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-md-4">
                                                <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_11-150x150.jpg" class="img-fluid rounded" alt="..." b />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <p class="card-text"><small class="text-muted mb-0">
                                                        OCTOBER 19, 2023</small></p>
                                                    <p class="text-hover">Quick Cravings: Unraveling Fast Food Delights</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-0">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-md-4">
                                                <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_10-150x150.jpg" class="img-fluid rounded" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <p class="card-text"><small class="text-muted mb-0">
                                                        OCTOBER 19, 2023</small></p>
                                                    <p class="text-hover">Fast Food Frenzy: A Taste of Convenience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='border-bottom py-3'>CATEGORIES</h4>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                            Business
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                            Creativity
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                            Life Lessons
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                            Startup
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter */}
            <section className='border-bottom pb-5 px-5 pt-3 position-relative border-top'>
                <div className='position-relative marque'>
                    <marquee class="marque-text">Subscribe • follow • newsletter •</marquee>
                </div>
                <div className='position-absolute' style={{ left: "434px", top: "258px" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png' width="40px"></img>
                </div>
                <div className='position-absolute' style={{ right: "427px", top: "215px", transform: "rotate(177deg)" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png' width="40px"></img>
                </div>
                <div className='position-absolute' style={{ left: "142px", top: "167px" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic1-300x286.png' width="220px" ></img>
                </div>
                <div className='position-absolute' style={{ right: "83px", bottom: "40px" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic2.png' width="300px" ></img>
                </div>
                <div className='position-absolute' style={{ left: "28px", top: "176px" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector2.png' width="70px"></img>
                </div>
                <div className='position-absolute' style={{ left: "144px", bottom: "-41px" }}>
                    <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector1.png' width="120px"></img>
                </div>
                <div className="container p-5">
                    <div className="newsletter text-center">
                        <h1 className='text-dark' style={{ fontSize: "40px " }}>JOIN FOR HOT OFFERS</h1>
                        <p className='text-muted py-3'>If we go all out… We do it well! Subscribe to the newsletter <br /> to get the most exclusive promos.</p>
                        <div className=''>
                            <form class="row g-3 justify-content-center">
                                <div class="col-4">
                                    <label for="inputPassword2" class="visually-hidden">Password</label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Email Address" />
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn-news px-3 py-2 text-white">subscribe <TiArrowRightOutline /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Blog
