
import axios from 'axios';
import React, { useState } from 'react'
 
import { useEffect } from 'react';

const Home = () => {
  const [Food,setfood] = useState([]);
  const getFood = async() => {
    try {
      let record = await axios.get("http://localhost:8000/foodView");
      console.log(record.data.dataView);
      setfood(record.data.dataView)
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(()=>{
    getFood();
  },[])
  return (
    <>

      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700" />
        <link rel="stylesheet" href="styles/index.processed.css" />
        <div className='text-center pt-5'>
          <h1>BEST SELLING DISHES</h1>
        </div>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between p-5">
           {
            Food?.map((val)=>{
              return(
            <div class="cards-list d-flex">
  
  <div className="cardss m-2">
      <div className="card_image">
        <img src={val.image} alt="Food" />
        <div className="overlay"></div>
      </div>
      <div className="card_title title-white fs-3 pt-3">
        <p>{val.foodname}</p>
      </div>
    </div>
            </div>
              )
            })
           }
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
