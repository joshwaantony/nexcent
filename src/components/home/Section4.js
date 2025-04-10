import React from "react";

function Section4() {
  return (
    <div className="flex  justify-between px-[100.23px] pt-[80px]">
      <div className="w-[40%] flex justify-center items-center">
        <img src="/Frame 35.svg"></img>
      </div>
      <div  className="w-[60%] px-[120px] flex flex-col justify-center items-start">
        <h1 className="text-[26px] font-semibold leading-[31px] text-[#4D4D4D]">
          The unseen of spending three <br /> years at Pixelgrade
        </h1>
        <p className="text-[10px] leading-[14px] text-[#717171] pt-[12px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="text-[12px] leading-[17px] text-[#FFFFFF] font-medium bg-[#4CAF4F]  rounded-[3px] w-[106px] h-[37px] mt-[23px]">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Section4;
