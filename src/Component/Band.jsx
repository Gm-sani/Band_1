import React from 'react'
import bandmempic from './bandmemberpic.jpg'

export default function Band() {
  return (
    <div className=' h-[93vh]'>
      <h1 className='m-3 p-3 text-center font-serif text-3xl'>  THE BAND </h1>
      <p className='m-3 text-center italic font-light'>We Love Music</p>
      <p className='mx-60 text-center'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
   <div className=' band_mem_pic flex justify-center gap-20 m-3 p-3 text-center'>
    <div className='m-5'>
    <p>Name</p>
       <img src={bandmempic} alt="" className='h-[25vh] my-7' />
    </div>

    <div className='m-5'>
    <p>Name</p>
       <img src={bandmempic} alt="" className='h-[25vh] my-7' />
    </div>

    <div className='m-5'>
    <p>Name</p>
       <img src={bandmempic} alt="" className='h-[25vh] my-7' />
    </div>

   </div>
    </div>
  )
}
