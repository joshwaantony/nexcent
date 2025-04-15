import Footer from "@/components/home/Footer";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Section7 from "@/components/home/Section7";
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
 <Section5/>
 <Section6/>
 <Section7/>
 <Footer/>
 

 </div>
   </div>
  );
}
