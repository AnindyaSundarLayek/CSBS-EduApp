import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import axios from "axios"

import Cards from './Cards';



function Freebook() {
  const [pdf,setPdf] = useState([])
    useEffect(() =>{
        const getPdf =async() =>{
            try {
               const res = await axios.get("http://localhost:8051/pdf")
               const data =res.data.filter((data) => data.category === "Free")
               console.log(data)
               setPdf(data)
            } catch (error) {
               console.log(error) 
            }
        }
        getPdf();
    },[])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
      <h1 className='font-semibold text-xl pb-2'><span className="text-pink-500">Free</span> Offered Course</h1>
      <p>A comprehensive collection of free online courses designed to complement your CSBS curriculum. These courses cover essential topics, provide  examples, and offer valuable insights to help you excel in your semester exams and in your career too.</p>
      </div>
    
    <div>
      <Slider {...settings}>
      {pdf.map((item) =>(
          <Cards item={item} key={item.id} />  
        ))}
      </Slider> 
    </div>
    </div>
    </>
  )
}

export default Freebook
