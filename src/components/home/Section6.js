// import React from "react";
// import { BsArrowRight } from "react-icons/bs";

// function Section6() {
//   return (
//     <div className="px-[100.23px] mt-[20px]">
//       <div>
//         <h1 className="text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center mt-[34px]">
//           Caring is the new marketing
//         </h1>
//         <p className="text-[12px] leading-[17px] text-[#717171] text-center px-[168px] mt-[6px]">
//           The Nextcent blog is the best place to read about the latest
//           membership insights, trends and more. See who's joining the community,
//           read about how our community are increasing their membership income
//           and lot's more.​
//         </p>
//         <div className="grid grid-cols-3 mt-[20px]">
//             <div className=" relative h-[250px]">
//                 <img src="/image 18.svg"></img>
//                 <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4  ">
//                     <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">Creating Streamlined Safeguarding Processes with OneRen</h1>
//                     <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">Readmore <BsArrowRight /></p>

//                 </div>
//             </div>
//             <div className=" relative h-[250px]">
//                 <img src="/image 19.svg"></img>
//                 <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4  ">
//                     <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">What are your safeguarding responsibilities and how can you manage them?</h1>
//                     <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">Readmore <BsArrowRight /></p>

//                 </div>
//             </div>
//             <div className=" relative h-[250px]">
//                 <img src="/image 20.svg"></img>
//                 <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4  ">
//                     <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">Revamping the Membership Model with Triathlon Australia</h1>
//                     <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">Readmore <BsArrowRight /></p>

//                 </div>
//             </div>
           

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section6;



import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Section6() {
  return (
    <div className="px-6 md:px-[100.23px] mt-[20px]">
      <div>
        <h1 className="text-[20px] md:text-[26px] font-semibold text-[#4D4D4D] leading-[31px] text-center mt-[34px]">
          Caring is the new marketing
        </h1>
        <p className="text-[12px] leading-[17px] text-[#717171] text-center px-4 md:px-[168px] mt-[6px]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[20px]">
          {/* Card 1 */}
          <div className="relative h-[250px]">
            <img src="/image 18.svg" alt="Blog 1" className="w-full h-full object-cover rounded-[6px]" />
            <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4 ">
              <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
              <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">
                Readmore <BsArrowRight />
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-[250px]">
            <img src="/image 19.svg" alt="Blog 2" className="w-full h-full object-cover rounded-[6px]" />
            <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4 ">
              <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">
                What are your safeguarding responsibilities and how can you manage them?
              </h1>
              <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">
                Readmore <BsArrowRight />
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-[250px]">
            <img src="/image 20.svg" alt="Blog 3" className="w-full h-full object-cover rounded-[6px]" />
            <div className="w-[221px] py-4 bg-[#F5F7FA] rounded-[6px] absolute bottom-0 left-4 ">
              <h1 className="text-[14px] font-semibold text-[#717171] text-center px-4">
                Revamping the Membership Model with Triathlon Australia
              </h1>
              <p className="text-[14px] font-semibold text-[#4CAF4F] text-center flex justify-center items-center gap-2">
                Readmore <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;

