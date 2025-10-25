import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {AnimatedList} from "@/components/animated-list";
import { Goal } from 'lucide-react';
import { Eye } from 'lucide-react';
import {BasicTimeline3} from '../components/EventTimeline'
function About(){
  const items=['Mission','Vision']
  const icons=[ <Goal />, <Eye />]
  const para=['I&E Cell, NIT Andhra Pradesh is dedicated to fostering innovative ideas and entrepreneurial spirit within the institute. We provide a platform for creative and igniting minds to project their scientific, technological, and managerial skills — helping them mold their ideas into reality.',
    'We aim at building an innovative, enterprising, and self-reliant India. We strive to create measurable impact by instigating change through entrepreneurship at the grassroots level.'
  ]
    const path = {
        About: "/about",
        Home: "/",
        Contact: "/contact",
        Team: "/team",
        Event: "/event",
        
      };
    return <>
    <div className="bg-slate-950 text-white h-screen w-screen  overflow-y-auto overflow-x-hidden">
        <Navbar path={path}/>
         <img src="logo-white.png" alt="" className=" z-50 w-[60px] h-[60px] absolute top-[-12px] left-[-8px] md:mx-auto md:top-[-3px] md:left-[750px]"/>
         <img src="1.jpg" alt="" className=" w-[100vw] h-[65vh] relative top-[-70px] pointer-events-none" />
         <div data-aos='zoom-in'>
          <div class="mx-auto w-[100vw] h-[20vh] md:w-[100vw] bg-black/60 backdrop-blur-md border border-slate-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 relative top-[60px] text-center shadow-[0_0_30px_5px_rgba(59,130,246,0.8)] animate-pulse"> 
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[-370px] animate-bounce" >About Us</h1>
        <h3 className=" text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[-35px] ">Empowering the next generation of innovators and entrepreneurs at NIT Andhra Pradesh</h3>
         </div>
         <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[100vw] h-[150vh] md:w-[100vw] md:h-[110vh] bg-black/30 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[86px] text-center ">
          <h3>Innovation and Entrepreneurship Cell, NIT Andhra Pradesh, was initiated by <span className="font-extrabold text-cyan-500"> Mr. Kiran Babu Pilla</span> along with <span className="font-extrabold text-cyan-500"> Mr. Chanakya Rajappagari</span> (final year mechanical) and <span className="font-extrabold text-cyan-500">Mr. M J Saura Siddarth</span> (final year civil), forming a body of 57 members including General Secretary, Joint Secretaries, executive members, and associate cell members from all years and departments. The Cell officially began its journey on <span className="font-extrabold text-cyan-500">October 29, 2018</span>.</h3>
          <h2 className="text-2xl font-bold text-cyan-300 relative top-[10px] underline decoration-cyan-900">About the Cell</h2>
          <h3 className="text-lg font-bold text-slate-300 relative top-[15px]">I&E Cell, NIT Andhra Pradesh, believes that Innovation and Entrepreneurship complement each other. Our aim is to cultivate innovative and entrepreneurial temper among students. We start by identifying ideas and go all the way in nurturing them into real-world outcomes.</h3>
           <h2 className="text-3xl font-extrabold text-cyan-500 relative top-[30px] ">"You have to believe it before you see it"</h2>
           <h3 className=" w-[105px] text-[14px] font-bold text-slate-300 relative top-[50px] left-[186px] md:left-[700px]">— Unknown</h3>
           <h3 className="text-xl font-bold text-slate-300 relative top-[80px]">We believe in your ideas and help you believe in your own — extending our support, network, and guidance to shape your journey forward.</h3>
             <div className="flex justify-center items-center bg-black/20 relative top-[100px]" >
                    <AnimatedList
                        items={items}
                        icons={icons}
                        para={para}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        displayScrollbar={true}
                    />
                </div>
         </div>
         <div class="relative bg-[url('/5.jpg')] bg-contain bg-repeat-y md:bg-cover bg-center md:bg-no-repeat opacity-90 mx-auto w-[100vw] h-[180vh] md:w-[100vw] md:h-[110vh] bg-black/30 backdrop-blur-md border border-red-400 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[150px] text-center shadow-[0_0_30px_5px_rgba(239,68,68,0.8)] animate-pulse">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent relative top-[-80px]">Our journey</h1>
        <h3 className="text-lg font-bold text-slate-300 relative top-[-15px]">Key milestones in our mission to foster innovation and entrepreneurship</h3>
        <div className="relative left-[-27px]">
          <BasicTimeline3 />
        </div>
         </div>


          <div className=" bg-black relative top-[200px]">
          <div className="w-[80vw] h-[1px] bg-amber-300 mx-auto relative "></div>
        <div className="relative top-[-42px]"><Footer/></div>
        </div>
         </div>
  </div>
    </>
}
export default About;