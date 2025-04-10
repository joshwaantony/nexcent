import React from 'react'

const Section1 = () => {
  return (
    <div className='flex justify-between px-[100.23px] items-center py-[75px] bg-[#F5F7FA]'>
        <div className='flex flex-col gap-[12px] ' >
            <h1 className='text-[45px] font-semibold text-[#4D4D4D] leading-[53px]'>Lessons and insights <br/> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
            <p className='text-[12px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
            <button className='text-[12px] text-[#FFFFFF] bg-[#4CAF4F] w-[90px] h-[37px] rounded-[3px]'>Register</button>
        </div>
        <div className='flex items-center'>
            <img src='/Illustration.svg'></img>
        </div>
    </div>
  )
}

export default Section1