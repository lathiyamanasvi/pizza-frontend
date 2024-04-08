import React from 'react'
import Header from './Landing/Header'
import Footer from './Landing/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <div className="">
        <div
          style={{
            backgroundImage: `url("https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="text-center" style={{padding:"50px" }}>
              <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-02.png" style={{ width: "14%" }} />
              <h1 class="text-white" style={{ fontSize: "30px", padding: '5px 0', fontFamily: 'EB Garamond' }}>Taste That Lasts Forever </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
