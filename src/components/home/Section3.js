// import React from "react";

// function Section3() {
//   return (
//     <div className="w-full px-[100.23px]">
//       <div>
//         <h1 className="text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center pt-[28px]">
//           Manage your entire community <br /> in a single system
//         </h1>
//         <p className="text-[12px] text-[#717171] leading-[17px] text-center py-[20px]">
//           Who is Nextcent suitable for?
//         </p>
//       </div>
 
//       <div className="w-full flex justify-between">
//       <div className="w-[209px] h-[183px] border rounded-[6px] flex flex-col justify-center items-center p-4 " >
//           <img src="/Icon1.1.svg"></img>
//           <h1 className="text-[20px] font-bold leading-[26px] text-[#4D4D4D] text-center">
//             Membership Organisations
//           </h1>
//           <p className="text-[10px] leading-[14px] text-[#717171] text-center py-[7px]">
//             Our membership management software provides full automation of
//             membership renewals and payments
//           </p>
//         </div>
//         <div className="w-[209px] h-[183px] border rounded-[6px] flex flex-col justify-center items-center p-4 " >
//           <img src="/Icon1.2.svg"></img>
//           <h1 className="text-[20px] font-bold leading-[26px] text-[#4D4D4D] text-center">
//           National Associations
//           </h1>
//           <p className="text-[10px] leading-[14px] text-[#717171] text-center py-[7px]">
//             Our membership management software provides full automation of
//             membership renewals and payments
//           </p>
//         </div>
        
//         <div className="w-[209px] h-[183px] border rounded-[6px] flex flex-col justify-center items-center p-4 " >
//           <img src="/Icon1.3.svg"></img>
//           <h1 className="text-[20px] font-bold leading-[26px] text-[#4D4D4D] text-center">
//           Clubs And Groups
//           </h1>
//           <p className="text-[10px] leading-[14px] text-[#717171] text-center py-[7px]">
//             Our membership management software provides full automation of
//             membership renewals and payments
//           </p>
//         </div>
        
        
//       </div>
//     </div>
//   );
// }

// export default Section3;







import React from "react";

function Section3() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-[100.23px]">
      {/* Header */}
      <div>
        <h1 className="text-[24px] md:text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center pt-[28px]">
          Manage your entire community <br className="hidden md:block" /> in a single system
        </h1>
        <p className="text-[12px] text-[#717171] leading-[17px] text-center py-[20px]">
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border rounded-[6px] flex flex-col justify-center items-center p-4 text-center">
          <img src="/Icon1.1.svg" alt="Membership Organisations" className="h-12 mb-2" />
          <h1 className="text-[18px] md:text-[20px] font-bold text-[#4D4D4D]">
            Membership Organisations
          </h1>
          <p className="text-[10px] leading-[14px] text-[#717171] py-[7px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-[6px] flex flex-col justify-center items-center p-4 text-center">
          <img src="/Icon1.2.svg" alt="National Associations" className="h-12 mb-2" />
          <h1 className="text-[18px] md:text-[20px] font-bold text-[#4D4D4D]">
            National Associations
          </h1>
          <p className="text-[10px] leading-[14px] text-[#717171] py-[7px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-[6px] flex flex-col justify-center items-center p-4 text-center">
          <img src="/Icon1.3.svg" alt="Clubs And Groups" className="h-12 mb-2" />
          <h1 className="text-[18px] md:text-[20px] font-bold text-[#4D4D4D]">
            Clubs And Groups
          </h1>
          <p className="text-[10px] leading-[14px] text-[#717171] py-[7px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;

