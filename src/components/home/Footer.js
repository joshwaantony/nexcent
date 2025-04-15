// import React from "react";
// import { FiInstagram } from "react-icons/fi";
// import { FaDribbble } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { FaYoutube } from "react-icons/fa";
// import { IoIosSend } from "react-icons/io";


// function Footer() {
//   return (
//     <div className="bg-black pt-[45px] px-[100.23px] pb-5  flex">
//       <div className=" w-[40%]">
//         <img className="w-[133px] h-[21px]" src="/trace.svg  "></img>
//         <p className="text-[10px] leading-[14px] text-[#F5F7FA] mt-[28px]">
//           Copyright © 2020 Landify UI Kit.
//         </p>
//         <p className="text-[10px] leading-[14px] text-[#F5F7FA] mt-[6px]">
//           All rights reserved
//         </p>

//         <div className=" flex gap-[12px] mt-[28px] mb-[53px]">
//           <FiInstagram />
//           <FaDribbble className="text-white" />
//           <BsTwitter className="text-white" />
//           <FaYoutube className="text-white" />
//         </div>
//       </div>
//       <div className="w-[60%]  flex  justify-between  ">
//         <div className="flex flex-col gap-[17px]">
//         <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Company</span>
//         <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">About us</span>

// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Blog</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Contact us</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Pricing</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Testimonials</span>
//         </div>
//         <div className="flex flex-col gap-[17px] ">
//       <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Support</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Help center</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Terms of service</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Legal</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Privacy policy</span>
// <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Status</span>

//       </div>
//       <div className="flex flex-col gap-[17px] ">
//       <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Stay up to date</span>
// <div className="flex justify-center items-center bg-[#454545] px-1 rounded-[3px]">
// <input className=" " type="email" placeholder="Your email address"></input>
// <IoIosSend />

// </div>
//       </div>



//       </div>
    
     
     
//     </div>
     
    

//   );
// }

// export default Footer;

import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaDribbble, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-black pt-12 px-6 md:px-12 lg:px-24 pb-6 flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/5">
        <img className="w-[133px] h-[21px]" src="/trace.svg" alt="logo" />
        <p className="text-xs text-[#F5F7FA] mt-6">Copyright © 2020 Landify UI Kit.</p>
        <p className="text-xs text-[#F5F7FA] mt-1">All rights reserved</p>

        <div className="flex gap-4 mt-6">
          <FiInstagram className="text-white" />
          <FaDribbble className="text-white" />
          <BsTwitter className="text-white" />
          <FaYoutube className="text-white" />
        </div>
      </div>

      <div className="lg:w-3/5 flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Company</span>
          {["About us", "Blog", "Contact us", "Pricing", "Testimonials"].map((item) => (
            <span key={item} className="text-xs text-[#F5F7FA]">{item}</span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Support</span>
          {["Help center", "Terms of service", "Legal", "Privacy policy", "Status"].map((item) => (
            <span key={item} className="text-xs text-[#F5F7FA]">{item}</span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Stay up to date</span>
          <div className="flex items-center bg-[#454545] rounded px-2">
            <input
              className="bg-transparent text-white text-xs px-2 py-1 focus:outline-none"
              type="email"
              placeholder="Your email address"
            />
            <IoIosSend className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;