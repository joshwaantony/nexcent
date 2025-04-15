// import React from "react";

// function Section4() {
//   return (
//     <div className="flex  justify-between px-[100.23px] pt-[80px]">
//       <div className="w-[40%] flex justify-center items-center">
//         <img src="/Frame 35.svg"></img>
//       </div>
//       <div  className="w-[60%] px-[120px] flex flex-col justify-center items-start">
//         <h1 className="text-[26px] font-semibold leading-[31px] text-[#4D4D4D]">
//           The unseen of spending three <br /> years at Pixelgrade
//         </h1>
//         <p className="text-[10px] leading-[14px] text-[#717171] pt-[12px] ">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           justo ipsum. Sed accumsan quam vitae est varius fringilla.
//           Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//           tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
//           Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
//           elementum pulvinar odio.
//         </p>
//         <button className="text-[12px] leading-[17px] text-[#FFFFFF] font-medium bg-[#4CAF4F]  rounded-[3px] w-[106px] h-[37px] mt-[23px]">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Section4;






import React from "react";

function Section4() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-12 lg:px-[100.23px] pt-[50px] lg:pt-[80px] gap-10">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-[31px] text-[#4D4D4D] text-left">
          The unseen of spending three <br className="hidden md:block" /> years at Pixelgrade
        </h1>
        <p className="text-[12px] md:text-[13px] leading-[17px] text-[#717171] pt-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="text-[12px] leading-[17px] text-white font-medium bg-[#4CAF4F] rounded-[3px] w-[106px] h-[37px] mt-[20px]">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src="/Frame 35.svg" alt="Pixelgrade Experience" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Section4;

