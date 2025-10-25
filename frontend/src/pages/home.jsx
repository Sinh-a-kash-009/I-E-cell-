import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Threads from '../components/threads';
import MediaControlCard from "../components/cards";
import SpotlightCard from "../components/SpotlightCard";
import Marquee from "react-fast-marquee";
import Card from "../components/card";
import {AnimatedList} from "../components/animated-list";
import { Lightbulb } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import {CustomizedTimeline} from "../components/EventTimeline";
import {Link} from "react-router-dom";
import WordSwapAnimation from "../components/bubbletext";

// And then update the usage in the JSX


function Home() {
    const items = [
        "Startup Incubation", "Skill Development", "Innovation Challenges",
    ];
    const icons = [<Lightbulb />, <Users />, <Award />];
    const para = [
        "Complete support from idea validation to market launch with mentorship and guidance.",
        "Engaging speaker sessions & knowledge-sharing events focused on business, innovation, and leadership skills.",
        "Hackathons and competitions that challenge students to solve real-world problems."
    ];
    const path = {
        Home: "/",
        About: "/about",
        Contact: "/contact",
        Team: "/team",
        Event: "/event",
    };
    const image = {
        'Finshots': 'img1.png',
        'Coding Ninja': 'img2.png',
        'E-cell MANIT Bhopal': 'img3.png',
        'TOP ONE PERCENT': 'img4.png',
        'Unstop': 'img5.png',
        'E-cell IIT Indore': 'img6.png',
        'Stock Gro': 'img7.png',
        'Zerodha': 'img8.png',
    }
    const name = Object.keys(image)
    const img = Object.values(image)

    return <>
        <div className="  bg-black text-white h-[100vh] w-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800 shadow-[0_0_900px_20px_#e99b63]  "
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
   {/* Glowing effect from the right side */}
  {/* <div className="z-10 absolute top-[-132px] left-[60px] w-[80vw] h-[80vh]
                  bg-gradient-to-l from-[#e99b63]/40 to-transparent 
                  blur-3xl pointer-events-none"></div> */}

            <Navbar path={path} />
           <img src="logo-white.png" alt="" className=" z-50 w-[60px] h-[60px] absolute top-[-12px] left-[-8px] md:mx-auto md:top-[-3px] md:left-[750px] "/>
           
            {/* <img src="hero.jpeg" alt="" className=" w-[100vw] h-[60vh] z-2 absolute top-0 right-0 opacity-20 pointer-events-none md:hidden" /> */}
             <div>
                <img src="1.jpg" alt="" className="  w-[100vw] h-[85vh]  relative top-[-50px] right-[-1px] " />
                
                {/* <img src="herobg.png" alt="" className=" w-[100vw] h-[60vh]  relative top-[-67px] right-[-1px]  md:block" /> */}
             </div>
            
           <div className="bg-slate-900 h-[300vh]">
           
            <h1 className='w-[80vw] text-2xl text-center relative top-[-400px] md:top-[-515px] left-[49px] font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl md:mx-auto md:pb-1.5 animate-bounce'>
  <span className="text-4xl md:text-7xl">E-CELL</span> NIT ANDHRA PRADESH
</h1>
           <div className="relative top-[-380px] left-[133px] md:top-[-478px] md:left-[584px]">
             <WordSwapAnimation />
           </div>
              {/* <div className="w-[99vw] h-[60vh] relative top-[-600px] border border-slate-600 border-b-0 border-t-0 rounded-2xl">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div> */}
            <div className="h-[100vh]">
                 <img src="2.jpg" alt="" className=" w-[100vw] h-[150vh] z-0 relative opacity-20 top-[-518px] right-[-1px]  md:block" />
                    <div  className="relative top-[-1200px]">
                                        <h3 className='w-[80vw] text-3xl text-center relative top-[162px] left-[49px] font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:text-6xl md:mx-auto md:pb-1.5'>
  Bring your Ideas into Reality
</h3>
            <p className='text-slate-400 text-[10px]  font-bold relative top-[196px] left-[54px] w-[80vw] text-center md:mx-auto md:text-xl'>At  <span className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">NIT Andhra Pradesh</span>,we nurture the entrepreneurial spirit, providing students with the tools, mentorship, and ecosystem needed to build tomorrow's innovations.</p>
           

            <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[80vw] h-[50vh] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6  top-[340px] md:w-[100vw] shadow-[0_0_30px_5px_rgba(59,130,246,0.8)] animate-pulse ">
                <h2 className=' w-[80vw]  text-3xl text-center relative top-[-12px] left-[-26px]  mx-auto md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:left-[30px]'>OUR PARTNERS</h2>
                <h3 className='text-slate-400 w-[80vw] font-bold text-[15px] text-center relative top-[1px] left-[-23px]  mx-auto md:text-4xl md:left-[40px]'>Collaborating with industry leaders to create opportunities for our students</h3>
                <div className="relative top-[64px] md:top-[25px] ">
                    <Marquee>
                        {
                            name.map((item, index) => {
                                return <Card key={index} name={item} img={img[index]} />
                            })
                        }

                    </Marquee>
                </div>
            </div>
            <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[80vw] h-[90vh]  bg-black/20 backdrop-blur-md border border-slate-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6  top-[440px] md:w-[100vw]">
                <h2 className=' w-[80vw]  text-3xl text-center relative top-[-12px] left-[-26px]  mx-auto md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:left-[12px]'>What We Do</h2>
                <h3 className='text-slate-400 w-[80vw] font-bold text-[15px] text-center relative top-[10px] left-[-23px]  mx-auto md:text-4xl'>We help students to develop their entrepreneurial skills and build their business networks.</h3>
                <div className="flex justify-center items-center bg-black/20 relative top-[37px]" >
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
            <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[80vw] h-[120vh] md:w-[100vw] md:h-[60vh] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[540px] md:top-[570px]">
                <h1 className=' w-[80vw]  text-3xl text-center relative top-[-12px] left-[-26px]  mx-auto md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:left-[12px]'>Past Events</h1>
                <CustomizedTimeline />
            </div>
                 <p
  className="mx-auto w-[142px] h-[38px] 
             bg-black/20 text-white 
             border border-slate-500/20 
             rounded-3xl relative top-[590px] left-[0px]
            hover:cursor-pointer border-l-cyan-600 border-r-cyan-600 hover:border-l-white hover:border-r-white hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] transition-all duration-400 text-center hover:text-cyan-600 " 
            
>
    <Link to='/event'>View All Events</Link>
</p>
                    </div>
            </div>
         
         
            <div className=' relative top-[1700px] left-[5px] md:top-[1300px]   md:w-[100vw]' > <p className="  text center w-[400px] relative top-[45px] left-[160px]  font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent  md:left-[660px]">FACULTY CO-ORDINATOR</p>
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px]  md:left-[360px] md:w-[50vw] text-slate-600 bg-slate-950 backdrop-blur-md border border-cyan-600 border-opacity-60 border-b-0 border-t-0 rounded-3xl p-6">
                    <img src="phaniSir.png" alt="" className="relative top-[-22px] object-cover rounded-t-xl md:mx-auto" />
                    <div className="w-[60vw] bg-slate-500 h-[2px] relative top-[-21px]   md:w-[45vw]"></div>
                    <div className='text-slate-300 text-center font-bold=' >Our I&E Cell is dedicated to fostering innovation and entrepreneurship. We provide a platform for students to explore their ideas, develop entrepreneurial skills, and connect with industry experts. Through workshops, competitions, and mentorship programs, we aim to cultivate a vibrant entrepreneurial ecosystem within our institution.
                       <span className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"> Dr. SRI PHANI KRISHNA KARRI</span>
                        Faculty Co-ordinator, I&E Cell

                        2025 - 2027</div>
                </SpotlightCard>
            </div>
            {/* <img src="4.jpg" alt="" className="w-[100vw] h-[100vh] z-0 relative opacity-20 top-[-518px] right-[-1px]  md:block" /> */}
            <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[80vw] h-[30vh] md:w-[90vw] bg-black/10 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[1800px] md:top-[1500px]">
                <h1 className=' w-[80vw]  text-3xl text-center relative top-[-12px] left-[-26px]  mx-auto md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent md:left-[20px]'>Need Support for Your Innovation?</h1>
                <h3 className='text-slate-400 w-[80vw] font-bold text-[15px] text-center relative top-[1px] left-[-23px]  mx-auto md:text-3xl md:pb-1.5'>Whether you have a startup idea, need mentorship, or want to collaborate with us, we're here to help you turn your vision into reality.</h3>
                 <p
  className="mx-auto w-[142px] h-[38px] 
             bg-black/20 text-white 
             border border-slate-500/20 
             rounded-3xl relative top-[70px] left-[0px]
            hover:cursor-pointer border-l-cyan-600 border-r-cyan-600 hover:border-l-white hover:border-r-white hover: hover:scale-170 transition-transform  text-center z-50 duration-700 hover:text-cyan-600" 
            
>
    <Link to='/contact'>Contact Us</Link>
</p>
            </div>
            




          
             <div className="relative top-[1900px] md:top-[1600px] bg-slate-950 "><div className="w-[80vw] h-[2px] bg-amber-300 mx-auto relative top-[20px]"></div>
            <Footer /></div>
           </div>
           
        </div>



    </>
}
export default Home;