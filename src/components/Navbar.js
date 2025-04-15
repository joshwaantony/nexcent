// import React from 'react'
// import { BsArrowRight } from "react-icons/bs";

// function Navbar() {
//   return (
//     <div className='w-full flex justify-between items-center px-[100.23px] py-[21.03px]'>
//      <div><img src='/Logo.svg'></img></div>
//      <div className='flex gap-[55px] justify-center items-center'>
//       <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Home</span>
//       <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Features</span>
//       <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Community</span>
//       <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Blog</span>
//       <span className='text-[#4D4D4D] font-medium text-[11.14px]'>Pricing</span>
//       <button className='text-[#FFFFFF] font-medium text-[11.14px] bg-[#4CAF4F] rounded-[2.78px] w-[133.25px] h-[36.49px] flex justify-center items-center gap-3' >Register Now <BsArrowRight /> </button>




//      </div>
//     </div>
//   )
// }

// export default Navbar







// import React, { useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs';
// import { HiMenu, HiX } from 'react-icons/hi';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="w-full flex justify-between items-center px-6 md:px-12 lg:px-[100.23px] py-4 relative bg-white">
//       {/* Logo */}
//       <div>
//         <img src="/Logo.svg" alt="Logo" className="w-[120px]" />
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex gap-[40px] items-center">
//         {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
//           <span
//             key={item}
//             className="text-[#4D4D4D] font-medium text-sm hover:text-[#4CAF4F] cursor-pointer"
//           >
//             {item}
//           </span>
//         ))}
//         <button className="text-white font-medium text-sm bg-[#4CAF4F] rounded-md px-5 py-2 flex items-center gap-2 hover:bg-[#45a845] transition">
//           Register Now <BsArrowRight />
//         </button>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="lg:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md lg:hidden z-50">
//           {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
//             <span
//               key={item}
//               className="text-[#4D4D4D] font-medium text-base hover:text-[#4CAF4F] cursor-pointer"
//             >
//               {item}
//             </span>
//           ))}
//           <button className="text-white font-medium bg-[#4CAF4F] rounded-md px-5 py-2 flex items-center gap-2 hover:bg-[#45a845] transition">
//             Register Now <BsArrowRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
"use client";

import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-12 lg:px-[100.23px] py-4 relative bg-white">
      {/* Logo */}
      <div>
        <img src="/Logo.svg" alt="Logo" className="w-[120px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-[40px] items-center">
        {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
          <span
            key={item}
            className="text-[#4D4D4D] font-medium text-sm hover:text-[#4CAF4F] cursor-pointer"
          >
            {item}
          </span>
        ))}
        <button className="text-white font-medium text-sm bg-[#4CAF4F] rounded-md px-5 py-2 flex items-center gap-2 hover:bg-[#45a845] transition">
          Register Now <BsArrowRight />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md lg:hidden z-50">
          {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
            <span
              key={item}
              className="text-[#4D4D4D] font-medium text-base hover:text-[#4CAF4F] cursor-pointer"
            >
              {item}
            </span>
          ))}
          <button className="text-white font-medium bg-[#4CAF4F] rounded-md px-5 py-2 flex items-center gap-2 hover:bg-[#45a845] transition">
            Register Now <BsArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
