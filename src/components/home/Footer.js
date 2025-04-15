import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


function Footer() {
  return (
    <div className="bg-black pt-[45px] px-[100.23px] pb-5  flex">
      <div className=" w-[40%]">
        <img className="w-[133px] h-[21px]" src="/trace.svg  "></img>
        <p className="text-[10px] leading-[14px] text-[#F5F7FA] mt-[28px]">
          Copyright © 2020 Landify UI Kit.
        </p>
        <p className="text-[10px] leading-[14px] text-[#F5F7FA] mt-[6px]">
          All rights reserved
        </p>

        <div className=" flex gap-[12px] mt-[28px] mb-[53px]">
          <FiInstagram />
          <FaDribbble className="text-white" />
          <BsTwitter className="text-white" />
          <FaYoutube className="text-white" />
        </div>
      </div>
      <div className="w-[60%]  flex  justify-between  ">
        <div className="flex flex-col gap-[17px]">
        <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Company</span>
        <span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">About us</span>

<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Blog</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Contact us</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Pricing</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Testimonials</span>
        </div>
        <div className="flex flex-col gap-[17px] ">
      <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Support</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Help center</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Terms of service</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Legal</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Privacy policy</span>
<span className="text-[10px] font-semibold leading-[14px] text-[#F5F7FA] ">Status</span>

      </div>
      <div className="flex flex-col gap-[17px] ">
      <span className="text-[14px] font-semibold leading-[20px] text-[#FFFFFF]">Stay up to date</span>
<div className="flex justify-center items-center bg-[#454545] px-1 rounded-[3px]">
<input className=" " type="email" placeholder="Your email address"></input>
<IoIosSend />

</div>
      </div>



      </div>
    
     
     
    </div>
     
    

  );
}

export default Footer;
