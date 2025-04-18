// import React from "react";
// import { BsArrowRight } from "react-icons/bs";


// function Section5() {
//   return (
//     <div className="flex  justify-between px-[100.23px] pt-[80px] bg-[#F5F7FA]">
//       <div className="w-[40%] flex items-center">
//         <img src="/image 9.svg"></img>
//       </div>
//       <div className="w-[60%]  flex flex-col justify-center items-start ">
//         <h1 className="text-[12px] text-[#717171] leading-[17px] font-medium ">
//           Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
//           sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
//           Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
//           molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
//           molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
//           ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
//           turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
//           sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
//           neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
//           dignissim finibus ac sit amet magna.
//         </h1>
//         <p className="text-[14px] font-semibold leading-[20px] text-[#4CAF4F] mt-[12px]">Tim Smith</p>
//         <p className="text-[12px] leading-[17px] text-[#89939E] mt-[6px]">British Dragon Boat Racing Association</p>
//         <div className="flex gap-[29px] mt-[23px]">
//             <img src="/Logo2.1.svg"></img>
//             <img src="/Logo2.2.svg"></img>
//             <img src="/Logo2.3.svg"></img>
//             <img src="/Logo2.4.svg"></img>
//             <img src="/Logo2.5.svg"></img>
//             <img src="/Logo2.6.svg"></img>
//             <p className="text-[14px] font-semibold  leading-[20px] text-[#4CAF4F] flex items-center gap-2">Meet all customers <BsArrowRight /></p>


//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default Section5;







import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Section5() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-12 lg:px-[100.23px] pt-[50px] lg:pt-[80px] bg-[#F5F7FA] gap-10">
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
        <p className="text-[12px] text-[#717171] leading-[17px] font-medium">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <p className="text-[14px] font-semibold leading-[20px] text-[#4CAF4F] mt-[12px]">
          Tim Smith
        </p>
        <p className="text-[12px] leading-[17px] text-[#89939E] mt-[6px]">
          British Dragon Boat Racing Association
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-[20px] lg:gap-[29px] mt-[23px]">
          <img src="/Logo2.1.svg" alt="Client 1" />
          <img src="/Logo2.2.svg" alt="Client 2" />
          <img src="/Logo2.3.svg" alt="Client 3" />
          <img src="/Logo2.4.svg" alt="Client 4" />
          <img src="/Logo2.5.svg" alt="Client 5" />
          <img src="/Logo2.6.svg" alt="Client 6" />
          <p className="text-[14px] font-semibold leading-[20px] text-[#4CAF4F] flex items-center gap-2 whitespace-nowrap">
            Meet all customers <BsArrowRight />
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src="/image 9.svg" alt="Testimonial" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Section5;

