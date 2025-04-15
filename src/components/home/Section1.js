// import React from 'react'

// const Section1 = () => {
//   return (
//     <div className='flex justify-between px-[100.23px] items-center py-[75px] bg-[#F5F7FA]'>
//         <div className='flex flex-col gap-[12px] ' >
//             <h1 className='text-[45px] font-semibold text-[#4D4D4D] leading-[53px]'>Lessons and insights <br/> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
//             <p className='text-[12px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
//             <button className='text-[12px] text-[#FFFFFF] bg-[#4CAF4F] w-[90px] h-[37px] rounded-[3px]'>Register</button>
//         </div>
//         <div className='flex items-center'>
//             <img src='/Illustration.svg'></img>
//         </div>
//     </div>
//   )
// }

// export default Section1

import React from 'react';

const Section1 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-16 lg:px-[100.23px] py-10 lg:py-[75px] bg-[#F5F7FA] gap-10 lg:gap-0">
      {/* Left Text Section */}
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[45px] font-semibold text-[#4D4D4D] leading-tight lg:leading-[53px]">
          Lessons and insights <br />
          <span className="text-[#4CAF4F]">from 8 years</span>
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#717171] max-w-md mx-auto lg:mx-0">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div>
          <button className="text-[14px] sm:text-[16px] text-white bg-[#4CAF4F] px-6 py-2 rounded-md w-fit mx-auto lg:mx-0">
            Register
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center">
        <img src="/Illustration.svg" alt="Illustration" className="w-[250px] sm:w-[300px] lg:w-[400px]" />
      </div>
    </div>
  );
};

export default Section1;
