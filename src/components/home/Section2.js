// import React from 'react'

// function Section2() {
//   return (
//     <div>
//       <h1 className='text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center pt-[28px]'>Our Clients</h1>
//       <p className='text-[12px] text-[#717171] leading-[17px] text-center pt-[6px]'>We have been working with some Fortune 500+ clients</p>
//       <div className='flex px-[100.23px]  pt-[35px] pb-[50px] justify-between'>
//         <img src='/Vector1.svg'></img>
//         <img src='/Logo2.svg'></img>
//         <img src='/Logo3.svg'></img>
//         <img src='/Logo4.svg'></img>
//         <img src='/Logo5.svg'></img>
//         <img src='/Logo6.svg'></img>
//         <img src='/Logo7.svg'></img>






//       </div>
//     </div>
//   )
// }

// export default Section2



import React from 'react';

function Section2() {
  return (
    <div className="bg-white">
      <h1 className="text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center pt-[28px]">
        Our Clients
      </h1>
      <p className="text-[12px] text-[#717171] leading-[17px] text-center pt-[6px] px-4">
        We have been working with some Fortune 500+ clients
      </p>

      {/* Responsive Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 px-6 md:px-12 lg:px-[100.23px] pt-[35px] pb-[50px] place-items-center">
        <img src="/Vector1.svg" alt="Client Logo 1" className="h-8 object-contain" />
        <img src="/Logo2.svg" alt="Client Logo 2" className="h-8 object-contain" />
        <img src="/Logo3.svg" alt="Client Logo 3" className="h-8 object-contain" />
        <img src="/Logo4.svg" alt="Client Logo 4" className="h-8 object-contain" />
        <img src="/Logo5.svg" alt="Client Logo 5" className="h-8 object-contain" />
        <img src="/Logo6.svg" alt="Client Logo 6" className="h-8 object-contain" />
        <img src="/Logo7.svg" alt="Client Logo 7" className="h-8 object-contain" />
      </div>
    </div>
  );
}

export default Section2;

