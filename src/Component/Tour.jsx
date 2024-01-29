import React from 'react'
import tour1 from './tourpic1.jpg'
import tour2 from './paris2.jpg'
import tour3 from './sanfran3.jpg'

export default function Tour() {
  return (
    <div className='bg-black  h-screen flex-col justify-center '>
     <p className='text-center p-3 font-serif text-3xl text-white'> TOUR DATES</p>
     <p className='text-center font-sans italic font-light text-white'> Remember to book your tickets!</p>


    {/*-------------------------------------second container-----------------------------------------*/}
     <div className='bg-white mx-52 my-6 '>
        <p  className='font-light border border-gray-200 p-3'>September</p>
        <p className='font-light border border-gray-200 p-3'>October</p>
        <p className='font-light border border-gray-200 p-3'>November</p>
     </div>


    {/*-------------------------------------image container--------------------------------------*/}
     <div className='img_cont bg-black mx-52 my-6 flex justify-between'>
        
    {/*-------------------------------------image container-1-------------------------------------*/}
        <div className='bg-white w-[20vw] '>
            <img src={tour1} alt="" className='h-[25vh] w-[20vw]'/>
            <p className='m-2 font-semibold'>New York</p>
            <p className='m-2 font-light'>Fri 27 Nov 2016</p>
            <p className='m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="rounded-none bg-black text-white text-center m-2 p-2 ">Buy Ticket</button>
        </div>
        
    {/*-------------------------------------image container-2-------------------------------------*/}
        <div className='w-[20vw] bg-slate-50'>
            <img src={tour2} alt="" className='h-[25vh] w-[20vw]'/>
            <p className='m-2 font-semibold'>Paris</p>
            <p className='m-2 font-light'>Sat 28 Nov 2016</p>
            <p className='m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="rounded-none bg-black text-white text-center m-2 p-2 ">Buy Ticket</button>
        </div>
        
    {/*-------------------------------------image container-3-------------------------------------*/}
        <div className='w-[20vw] bg-slate-50'>
            <img src={tour3} alt="" className='h-[25vh] w-[20vw]'/>
            <p className='m-2 font-semibold'>San Francisco</p>
            <p className='m-2 font-light'>Sun 29 Nov 2016</p>
            <p className='m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="rounded-none bg-black text-white text-center m-2 p-2 ">Buy Ticket</button>
        </div>

     </div>
    </div>
  )
}
