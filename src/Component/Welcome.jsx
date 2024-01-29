import React from 'react'
import welcmpic from './welcmpic.jpg'
export default function Welcome() {
  return (
    <div>
        <div className='bg-cover h-[93vh]'>
    <img src={welcmpic} alt="" className='h-[93vh] w-[100vw]'/>
        </div>
    </div>
  )
}
