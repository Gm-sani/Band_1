import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';
import TourIcon from '@mui/icons-material/Tour';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between bg-black h-[7vh] text-white'>
      <div className='flex gap-12 font-serif font-bold text-lg m-3 mx-7 '>
      <IconButton onClick={()=>{navigate("/")}}>
      <HomeIcon className='text-white'/>
      </IconButton>
     
      <IconButton onClick={()=>{navigate("band")}}>
      <FilterBAndWIcon className='text-white'/>
      </IconButton>
     
      <IconButton onClick={()=>{navigate("tour")}}>
      <TourIcon className='text-white'/>
      </IconButton>
      
      <IconButton>
      <ContactMailIcon className='text-white'/>
      </IconButton>
    </div>
    <div className='m-3 my-1'>
      <IconButton>
      <SearchIcon className='text-white'/>
      </IconButton>
       
    </div>
     </div> 
  )
}
