import React from 'react'

const Slider = () => {
  return (
   <>
{/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://zio-alberto.ancorathemes.com/wp-content/uploads/2017/02/background-1.jpg?id=189" className="d-block w-100" height="500px" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://zio-alberto.ancorathemes.com/wp-content/uploads/2017/02/bg-20.jpg?id=636" className="d-block w-100" height="500px" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://zio-alberto.ancorathemes.com/wp-content/uploads/2017/02/bg-1.jpg?id=289" className="d-block w-100" height="500px" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
      <div style={{zIndex:"-1",position: 'relative',}}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              style={{
                backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-01.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "850px",
              }}
            >
              <div className="container">
                <div className="text-center" style={{ paddingTop: "200px"  }}>
                  <img src="	https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-01.png" style={{width:"10%"}}/>
                  <h1 class="text-white" style={{fontSize:"90px", padding:'5px 0',fontFamily: 'EB Garamond'}}>Bring The Best<br></br> Experience </h1>
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
                backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-02.jpg")`,
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
    </div>

   </>
  )
}

export default Slider
