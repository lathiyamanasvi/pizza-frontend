import React from 'react'

const Slider = () => {
  return (
   <>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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
</div>

   </>
  )
}

export default Slider
