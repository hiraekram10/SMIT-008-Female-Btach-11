import React from 'react'
import './design.css'
import man from '../assets/Group 11 1.png'

const Herosec = () => {
  return (
    <div className='lg:flex h-screen sm:flex-column'>
    <div className='left lg:w-1/2 md:w-full  h-full  p-[10px] flex  justify-center items-center '>
    <div className='h-80 w-5/6 '>
        <h4  className='font-bold text-3xl'>Hey, I am John</h4>
        <h1 className='font-bold text-6xl leading-16'>I create product design and brand experience</h1>
        <p className='font-[200] text-xl leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    <button className='w-40 h-10 bg-purple-900 '>go react</button>
    </div>
    </div>
    <div className='right lg:w-1/2 md:w-full h-full'>
    <div className='h-80 w-5/6 '>
     <img className='w-full' src={man} alt="" />
    </div></div>
    </div>
  )
}

export default Herosec
