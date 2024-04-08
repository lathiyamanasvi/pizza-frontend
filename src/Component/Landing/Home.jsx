
import React, { useState } from 'react'
import axios from 'axios';
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
      <style dangerouslySetInnerHTML={{ __html: "\n       .cards-container {\n  width: 30%;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n\n.card {\n  background-color: #fff;\n  box-shadow: 10px 10px 40px 2px rgba(128, 128, 128, 0.4);\n  display: inline-block;\n  width: 20rem;\n  border-radius: 10px;\n}\n.card .card-media {\n  background-image: url(https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85);\n  background-position: center;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n  object-fit: fit;\n  border-radius: 10px 10px 0 0;\n  position: relative;\n}\n.card .card-media .discount {\n  font-size: 12px;\n  background-color: #3582ec;\n  position: absolute;\n  bottom: 21%;\n  padding: 2px 5px 2px 20px;\n  border-radius: 0 4px 4px 0;\n  max-width: 60px;\n  left: 0;\n  color: #fff;\n  font-weight: 700;\n}\n.card .card-media .discount p {\n  font-weight: 400;\n}\n.card .card-media .pro-discount {\n  font-size: 12px;\n  background-color: #e83940;\n  position: absolute;\n  bottom: 6%;\n  padding: 3px 5px;\n  border-radius: 0 4px 4px 0;\n  max-width: 110px;\n  left: 0;\n  color: #fff;\n}\n.card .card-media .delivery-time {\n  position: absolute;\n  background-color: #f5f5f5;\n  max-width: 60px;\n  padding: 3px 6px;\n  font-size: 12px;\n  right: 3%;\n  bottom: 6%;\n  border-radius: 4px;\n}\n.card .card-description {\n  padding: 10px;\n}\n.card .card-description .about-place {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card .card-description .about-place .place-name {\n  font-weight: 600;\n  padding-bottom: 10px;\n  color: rgba(0, 0, 0, 0.87);\n}\n.card .card-description .about-place .place-speciality, .card .card-description .about-place .per-person {\n  font-size: 14px;\n  color: rgba(128, 128, 128, 0.97);\n}\n.card .card-description .about-place .rating {\n  font-size: 14px;\n  border-radius: 4px;\n  background-color: #0a6d0acc;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  padding: 2px 0;\n  margin-bottom: 6px;\n  margin-left: 30px;\n}\n       " }} />

      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,400i,700" />
        <link rel="stylesheet" href="styles/index.processed.css" />
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between p-5">
           {
            Food?.map((val)=>{
              return(
                <div className="card col-3 p-3 m-2">
              <div className="card-media">
                <div className="bookmark" />
              </div>
              <div className="card-description">
                <div className="about-place">
                  <div className="place">
                    <p className="place-name">{val.foodname}</p>
                    <p className="place-speciality">Italian, Fast Food, Beverages</p>
                  </div>
                  <div className="place-review">
                    <p className="rating">4.6 ★</p>
                    <p className="per-person"> ₹ 200 per one</p>
                  </div>
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
