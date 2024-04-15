import React from 'react'

const Slider = () => {
  return (
   <>
      {/* <div style={{zIndex:"-1",position: 'relative',}}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              style={{
                backgroundImage: `url("https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/06/background-pizza-home-top.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div className="container">
                <div className="text-center" style={{ paddingTop: "200px"  }}>
                  <img src="	https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-01.png" style={{width:"10%"}}/>
                  <h1 class="text-white" style={{fontSize:"90px", padding:'5px 0',fontFamily: 'EB Garamond'}}>SPICY SICILIANA</h1>
                  <button style={{border:'none',padding:'15px 20px', backgroundColor:"#BC8157", fontSize:'18px',marginTop:'30px'}} className="fw-bold text-white">ORDER NOW</button>
                </div>
              </div>
            </div>
            <div>
              
            </div>
           
          </div>
          <div className="carousel-item">
            <div
              style={{
                backgroundImage: `url("https://prestashop4.templatetrip.com/PRS07/PRS206_foodie/PRS05/modules/ps_imageslider/images/cd73740d5f1d621de88ec10c8e0ac6540332bfe1_slider-01.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "850px",
              }}
            >
                 <div className="container">
                <div className="w-50 text-center" style={{ paddingTop: "200px"  }}>
                  <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-02.png" style={{width:"14%"}}/>
                  <h1 class="text-white" style={{fontSize:"90px", padding:'5px 0',fontFamily: 'EB Garamond'}}>Taste That Lasts Forever </h1>
                  <button style={{border:'none',padding:'15px 20px', backgroundColor:"#BC8157", fontSize:'18px',marginTop:'30px'}} className="fw-bold text-white">ORDER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div> */}
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://opencart.mahardhi.com/MT03/food/image/cache/catalog/banners/mainbanner1-1920x800.jpg" class="d-block w-100" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://opencart.mahardhi.com/MT03/food/image/cache/catalog/banners/mainbanner2-1920x800.jpg" class="d-block w-100" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://opencart.mahardhi.com/MT03/food/image/cache/catalog/banners/cat_banner-870x300.jpg" class="d-block w-100" height="600px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Slider
