import React, { useState,useEffect } from 'react'
import Cards from "./Cards"
import axios from "axios"

import { Link } from "react-router-dom"


function Course() {
    const [pdf,setPdf] = useState([])
    useEffect(() =>{
        const getPdf =async() =>{
            try {
               const res = await axios.get("http://localhost:8051/pdf")
               console.log(res.data)
               setPdf(res.data)
            } catch (error) {
               console.log(error) 
            }
        }
        getPdf();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='py-28 items-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl '>Your Path to CSBS Journey Success is<span className="text-pink-500"> Here! :)</span></h1>
            <p className='mt-12'>Welcome to the  LEARNN, where we've meticulously curated a comprehensive collection of resources designed to help you excel in your CSBS Sem Lab Vivas & Semester Exams. Our expertly crafted courses cover all the essential topics and provide in-depth explanations, practice problems and past exam questions to ensure your thorough preparation. With our guidance, you'll be well-equipped to tackle the challenges of your exams and achieve academic excellence.</p>
            <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                pdf.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
      
    </>
  )
}

export default Course
