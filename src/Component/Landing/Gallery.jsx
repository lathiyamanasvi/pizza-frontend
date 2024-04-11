import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";

const Gallery = () => {
  return (
    <>
        {/* newsletter */}
        <section className='pb-5 px-5 pt-3 position-relative'>
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
          <div className='position-absolute' style={{ left: "144px", bottom: "-41px",zIndex:"-1" }}>
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

        <section>
  <div class="box box-1" style={{backgroundImage:"url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery2.jpg')"}}>
  </div>
  <div class="box box-2" style={{backgroundImage:"url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery5.jpg')"}}></div>
  <div class="box box-3" style={{backgroundImage:"url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery6.jpg')"}}></div>
  <div class="box box-4" style={{backgroundImage:"url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery7.jpg')"}}></div>
  <div class="box box-5" style={{backgroundImage:"url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery10.jpg')"}}></div>
</section>
    </>
  )
}

export default Gallery
