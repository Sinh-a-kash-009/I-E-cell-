import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BasicTimeline, BasicTimeline2 } from "../components/EventTimeline";
function Event() {
  const path = {
    Event: "/event",
    Home: "/",
    About: "/about",
    Contact: "/contact",
    Team: "/team",
  };

  return <>
    <div className="bg-slate-950 text-white h-screen w-screen overflow-x-hidden overflow-y-auto">
      <Navbar path={path} />
       <img src="logo-white.png" alt="" className=" z-50 w-[60px] h-[60px] absolute top-[-12px] left-[-8px] md:mx-auto md:top-[-3px] md:left-[750px]"/>
     
      {/* <img src="g.png" alt="" className=" w-[100vw] h-[65vh] z-2 absolute top-0 right-0 opacity-30 pointer-events-none hidden md:block" /> */}
      <img src="1.jpg" alt="" className=" w-[100vw] h-[65vh] relative top-[-70px] pointer-events-none " />
      <div data-aos='zoom-in'>
        <div class="relative bg-[url('/5.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[100vw] h-[20vh] md:w-[100vw] bg-black/20 backdrop-blur-md border border-red-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6  top-[60px] text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[-400px] animate-bounce">Our Event</h1>
        <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent  relative top-[-40px]">Explore our journey of fostering innovation through impactful events and workshops</h3>
      </div>
      <div class=" bg-[url('/1.jpg')] relative md:bg-[url('/3.jpg')] bg-cover md:bg-cover   bg-repeat-y md:bg-no-repeat opacity-90 mx-auto w-[100vw] h-[530vh] md:w-[100vw] md:h-[300vh] bg-black/10 backdrop-blur-md border border-cyan-500 border-b-0 border-t-0 rounded-3xl p-6 top-[100px] text-center" >
        <div className='flex justify-center'>
          <div className="w-[65px] h-[65px] bg-cyan-500 rounded-[65px] relative left-[-29px]"><p className="relative top-[20px] text-pink-200">2024-25</p></div>
          <div className="w-[400px] h-[1px] bg-cyan-500  relative top-[34px] left-[-27px] "></div>
        </div>
        <div className="relative left-[-27px]">
          <BasicTimeline />
        </div>
        <div className='flex justify-center'>
          <div className="w-[65px] h-[65px] bg-cyan-500 rounded-[65px] relative left-[-29px]"><p className="relative top-[20px] text-pink-200">2023-24</p></div>
          <div className="w-[400px] h-[1px] bg-cyan-500  relative top-[34px] left-[-27px] "></div>
        </div>
        <div className="relative left-[-27px]">
          <BasicTimeline2 />
        </div>
        <div className=" mx-auto w-[222px]  rounded-[12px] border border-t-0 border-b-0 border-l-cyan-400 border-r-cyan-400 hover: hover:scale-110 transition-transform  text-center  duration-300 relative top-[20px]">
          <a href="/myfile.pdf" target="_blank" rel="noopener noreferrer" >
            Click For More Past Events
          </a>
        </div>
      </div>
      </div>
      <div className=" bg-black relative top-[150px]">
          <div className="w-[80vw] h-[1px] bg-amber-300 mx-auto relative "></div>
        <div className="relative top-[-42px]"><Footer/></div>
        </div>
    </div>
  </>
} 
export default Event;