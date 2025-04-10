import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <div>
    <Navbar/>
    </div>
 <div>
 <Section1/>
 <Section2/>
 <Section3/>
 <Section4/>

 </div>
   </div>
  );
}
