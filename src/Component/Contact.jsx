import React, { useEffect } from 'react'
import Header from './Landing/Header'
import Footer from './Landing/Footer'
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-bg">
        <div
          style={{
            backgroundImage: `url("https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
          }}
        >
          <div className="container">
            <div className="text-center" style={{ padding: "100px" }}>
              <h1 class="text-white fw-bold" style={{ fontSize: "50px", padding: '5px 0'}}>Contact</h1>
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
          <div class="card border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <div className='py-3'>
                <IoLocation className='fs-1 text-success icon' />
              </div>
              <h4 class="card-title pb-2">ADDRESS LINE</h4>
              <p class="card-text">Bowery St, New York, 37 USA<br />NY 10013,USA </p>
            </div>
          </div>

          <div class="card border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <div className='py-3'>
                <FaPhoneVolume className='fs-1 text-success icon' />
              </div>
              <h4 class="card-title pb-2">PHONE NUMBER</h4>
              <p class="card-text">+1255-568-6523 4374-221<br />+1255-568-6523</p>
            </div>
          </div>

          <div class="card border-0 shadow text-center py-4 px-3" style={{ width: "18rem" }}>
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
      <body>
        <div className="">
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.242241988603!2d-74.00699648428173!3d40.71435297933491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f4a4c6f5d%3A0x69c0fbb4f66b98b5!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1617393586422!5m2!1sen!2sin" allowfullscreen></iframe>
          </div>
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
      </body>


      {/* newsletter */}
      <section className='bg'>
        <div className="container">
          <div className="d-flex p-5">
            <div className="w-50 py-5">
              <p className='text-warning fs-5'>CRISPY, EVERY BITE TASTE</p>
              <h3 className='text-white fs-1 fw-bold'>30 MINUTES FAST<br /><span className='text-warning'>DELIVERY</span> CHALLAGE</h3>
            </div>
            <div className="w-50 d-flex position-relative">
              <div>
                <img src='https://modinatheme.com/html/foodking-html/assets/img/delivery-man-2.png' width="300px" />
              </div>

              <div className='position-absolute btn4' style={{ bottom: "80px", right: "40px" }}>
                <button class="" style={{}} className='px-3 py-3 border-0 rounded text-dark fw-bold'><TbTruckDelivery className='text-succes me-2 fs-4' />ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
