import React, { useEffect } from 'react'
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'
import { MdOutlineStarPurple500 } from "react-icons/md"

const Testimonial = () => {
    useEffect(()=>{
        $(".slider ol li").on("click", function() {
            $(this).addClass("active").siblings("li").removeClass("active");
            $(".slider ul").animate({
                top: -$(".slider").height() * $(this).index()
            }, 500);
        });
        
        // Em An
        // 8-2017
        // https://codepen.io/collection/AGNJNB/
    },[])
  return (
   <>
    <section style={{backgroundImage:"url(https://images.squarespace-cdn.com/content/v1/5e985b23a628e820e01bc123/1609267072538-FBZ8B66XXU8VJ00UDLTL/dreamstime_xxl_161958388.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundBlendMode:"darken",backgroundColor:"rgba(0,0,0,0.5)"}} className='p-5'>
      
    <div class="container ">
    <div className='text-center'>
            <h2 className='text-white fw-bold' style={{fontSize:"40px"}}>TESTIMONIALS</h2>
            <p style={{color:"#FFBD10"}} className='fs-4'>what clients say</p>
        </div>
    <div class="slider testimonial">
        <ul>
        <li className='text-center' style={{padding:"70px"}}>
                <span>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                </span>
                <h2 className='text-white pt-3'>“It was really great Test”</h2>
                <h2 className='py-3 fs-5' style={{color:"#DOCDCD"}}>“We like your thin crust, which is very difficult to get anywhere else, it’s as good as in Italy. The toppings are also more generous than at other pizza places."</h2>
               <p className='pb-3 fs-5' style={{color:"#ff9e0c"}}>Thomas Booth, 35 years</p> 
            </li>   
            <li className='text-center' style={{padding:"70px"}}>
                <span>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                </span>
                <h2 className='text-white pt-3'>“It was really great Test”</h2>
                <h2 className='py-3 fs-5' style={{color:"#DOCDCD"}}>“I enjoy a classic pizza with quality ingredients. Pizzas are most tasty! Free toppings wonderful!! Quick delivery and always friendly service. Thank you guys.”</h2>
               <p className='pb-3 fs-5' style={{color:"#ff9e0c"}}>John Newlish, 22 years</p> 
            </li>   
            <li className='text-center' style={{padding:"70px"}}>
                <span>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                    <MdOutlineStarPurple500 style={{color:"#ff9e0c",fontSize:"16px"}}/>
                </span>
                <h2 className='text-white pt-3'>“It was really great Test”</h2>
                <h2 className='py-3 fs-5' style={{color:"#DOCDCD"}}>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,or randomised words”</h2>
               <p className='pb-3 fs-5' style={{color:"#ff9e0c"}}>John Newlish, 22 years</p> 
            </li>   
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</div>
    </section>
   </>
  )
}

export default Testimonial
