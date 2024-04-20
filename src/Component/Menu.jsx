
import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";
import { CiPizza } from "react-icons/ci";
import { CgMenuHotdog } from "react-icons/cg";
import { TbSoup } from "react-icons/tb";
import Header from './Landing/Header';


function Menu() {
  return (
    <>
      <Header />
      <section className='bg-img py-100'>
        <div className="container">
          <div className="row">
            <div className="banner-content">
              <h1>MENU RESTAURANT</h1>
              <p><Link to={'/home'}>Home Page</Link> <IoIosArrowForward /> Menu Restaurant</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-100'>
        <div className="container">
          <div className="row">
            <div className="popular-content">
              <h1>POPULAR DISHES</h1>

              <div className="main-content">
                <div uk-filter="target: .js-filter">
                  <ul className="uk-navbar-nav d-flex">
                    <li className="uk-active" uk-filter-control><a href="#"><PiHamburger style={{marginRight : '5px', textAlign : 'center', fontSize : '22px'}}/>Burger</a></li>
                    <li uk-filter-control="[data-num='1']"><a href="#"><CiPizza style={{marginRight : '5px', textAlign : 'center', fontSize : '25px'}}/>Pizza</a></li>
                    <li uk-filter-control="[data-num='2']"><a href="#"><CgMenuHotdog style={{marginRight : '5px', textAlign : 'center', fontSize : '25px'}}/>Sushi</a></li>
                    <li uk-filter-control="[data-num='3']"><a href="#"><TbSoup style={{marginRight : '5px', textAlign : 'center', fontSize : '25px'}}/>Salats</a></li>
                    <li uk-filter-control="[data-num='3']"><a href="#"><TbSoup style={{marginRight : '5px', textAlign : 'center', fontSize : '25px'}}/>Frise~</a></li>
                  </ul>
                  <ul className="img-gallery-container js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                    <li data-num={2}>
                        <div className="menu-card">
                          <div className="menu-img">
                            <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_27.png" width="250px" />
                          </div>
                          <div className="menu-content"></div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
