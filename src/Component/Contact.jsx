import React, { useEffect } from 'react'
import Header from './Landing/Header'
import Footer from './Landing/Footer'
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import 'jquery-ui-dist/jquery-ui';
import { TiArrowRightOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <>
      <body className='contactus'>
        <Header />
        <div className="contact-bg">
          <div
            style={{
              backgroundImage: `url("https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="text-center" style={{ padding: "100px" }}>
                <h1 class="text-white fw-bold" style={{ fontSize: "50px", padding: '5px 0' }}>Contact</h1>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="container p-5" style={{ paddingTop: "80px" }}>
          <div className="text text-center p-3">
            <h2 className='text-dark fw-bold' style={{
              fontSize:
                "50px"
            }}>GET IN TOUCH WITH US </h2>
            <p className='text-muted fs-6'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the <br /> contact form and we’ll get back to you.</p>
          </div>
          <div className="d-flex justify-content-between">
            <div class="card cards border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
              <div class="card-body">
                <div className='py-3'>
                  <IoLocation className='fs-1 text-success icon' />
                </div>
                <h4 class="card-title pb-2">ADDRESS LINE</h4>
                <p class="card-text">Bowery St, New York, 37 USA<br />NY 10013,USA </p>
              </div>
            </div>

            <div class="card cards border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
              <div class="card-body">
                <div className='py-3'>
                  <FaPhoneVolume className='fs-1 text-success icon' />
                </div>
                <h4 class="card-title pb-2">PHONE NUMBER</h4>
                <p class="card-text">+1255-568-6523 4374-221<br />+1255-568-6523</p>
              </div>
            </div>

            <div class="card cards border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
              <div class="card-body">
                <div className='py-3 '>
                  <IoIosMailOpen className='fs-1 text-success icon' />
                </div>
                <h4 class="card-title pb-2">MAIL ADRESS</h4>
                <p class="card-text">email@example.com<br />info@yourdomain.com</p>
              </div>
            </div>

          </div>
        </div>


        {/* form */}
        <div className="border-bottom">
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.242241988603!2d-74.00699648428173!3d40.71435297933491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f4a4c6f5d%3A0x69c0fbb4f66b98b5!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1617393586422!5m2!1sen!2sin" allowfullscreen></iframe>
          </div>


          <div className='position-relative'>
            <div className='position-absolute' style={{ left: "80px", top: "90px" }}>
              <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_vector1.png'></img>
            </div>
            <div className='position-absolute' style={{ right: "180px", top: "130px" }}>
              <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_vector5.png'></img>
            </div>
            <div class="container" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
              <h2 className='text-center'>Contact Us</h2>
              <div className="">
                <div className="w-50 p-3 m-auto">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Password</label>
                      <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* newsletter */}
        <section className='border-bottom pb-5 px-5 pt-3 position-relative'>
          <div className='position-absolute' style={{ left: "434px", top: "122px" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png' width="40px"></img>
          </div>
          <div className='position-absolute' style={{ right: "427px", top: "57px", transform: "rotate(177deg)" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png' width="40px"></img>
          </div>
          <div className='position-absolute' style={{ left: "142px", top: "48px" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic1-300x286.png' width="220px" ></img>
          </div>
          <div className='position-absolute' style={{ right: "83px", bottom: "40px" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic2.png' width="300px" ></img>
          </div>
          <div className='position-absolute' style={{ left: "28px", top: "38px" }}>
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
      </body>
    </>
  )
}

export default Contact
