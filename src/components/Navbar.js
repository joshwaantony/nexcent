import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center px-[100.23px] py-[21.03px]'>
     <div><img src='/Logo.svg'></img></div>
     <div className='flex gap-[55px] justify-center items-center'>
      <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Home</span>
      <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Features</span>
      <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Community</span>
      <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Blog</span>
      <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Pricing</span>
      <button className='text-[#FFFFFF] font-medium text-[11.14px] bg-[#4CAF4F] rounded-[2.78px] w-[133.25px] h-[36.49px] flex justify-center items-center gap-3' >Register Now <BsArrowRight /> </button>




     </div>
    </div>
  )
}

export default Navbar