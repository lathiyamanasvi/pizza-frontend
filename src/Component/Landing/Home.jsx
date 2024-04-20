
import axios from 'axios';
import React, { useState } from 'react'
import './style.css';
import './animate.css';
import { useEffect } from 'react';
import { FaBurger } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const Home = () => {
  const [Food,setfood] = useState([]);
  const getFood = async() => {

    try{
      let {data} = await axios.get('http://localhost:8000/foodView');
      console.log(data.dataView);
      setfood(data.dataView);
    }catch(err){
      console.log(err);
      return false;
    }    
  }

  useEffect(()=>{
    getFood();
  },[])
  return (
    <>

<div>
        <div className='text-center '>
        </div>
        <div className=" d-flex flex-wrap mb-5">
         {
            Food?.map((val)=>{
              return(

           <article class="card">
            <img
              class="card__background"
              src={val.image}
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h4 class="card__title">{val.foodname}</h4>
                {/* <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                  labore laudantium deserunt fugiat numquam.
                </p> */}
              </div>
              <button class="card__button">Read more</button>
            </div>
          </article>
          )
            })
           } 
        </div>
      </div>

      <section className='position-relative'>
      <div className='position-absolute wow animate__animated animate__backInLeft' style={{ left: "101px", top: "159px" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_vector1.png' width="120px"></img>
          </div>
          <div className='position-absolute wow animate__animated animate__backInRight' style={{ right: "74px", top: "79px" }}>
            <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_vector2.png' width="100px"></img>
          </div>
        <div className="container">
          <div className="d-flex" style={{margin:"100px 0 50px"}}>
            <div className="w-50 p-5">
             <div className='zoom'>
              <img src='https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_img-600x639.png'/>
             </div>
            </div>
            <div className="w-50 p-5">
              <p style={{color:"#C33130",fontSize:"16px"}} className='fw-bolder'>ABOUT OUR FOOD</p>
              <h2 style={{fontSize:"55px"}} className='fw-bold py-3'>WE MAKE THE BEST BURGER IN YOUR TOWN</h2>
              <p className='text-muted fs-6 my-3'>The mouth-watering aroma of sizzling burgers now fills the streets of Birmingham thanks to the passionate pursuit of three brothers, the British founders of Fazfood. After over 50 years of experience in the culinary industry between them, they set out on a journey to discover the ultimate burger.</p>
              <div className='d-flex flex-wrap py-3'>
                <div className="col-4 p-4">
                <div className="text-center icon-image">
                <FaBurger  style={{color:"#C33130",fontSize:"50px"}}/>
                </div>
                <p style={{fontSize:"15px",fontWeight:"700"}} className='text-dark py-3'>A NEW LOOK ON THE RIGHT FOOD!</p>
                </div>
                <div className="col-4 py-4">
                <div className="text-center">
                <GiFruitBowl style={{color:"#C33130",fontSize:"50px"}}/>
                </div>
                <p style={{fontSize:"15px",fontWeight:"700"}} className='text-dark py-3'>THE USE OF NATURAL BEST QUALITY</p>
                </div>
                <div className="col-4 p-4">
                <div className="text-center">
                <MdDeliveryDining   style={{color:"#C33130",fontSize:"50px"}}/>
                </div>
                <p style={{fontSize:"15px",fontWeight:"700"}} className='text-dark py-3'>FASTEST ON YOUR DOOR STEP!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

    </>
  )
}

export default Home
