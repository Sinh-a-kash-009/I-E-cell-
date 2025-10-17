import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SpotlightCard from "../components/spotlightcard";
import { AnimatedList2 } from "@/components/animated-list";
function Team(){
   const names = ["Chiranth M","Akash Reddy" ];
  const positions = [" Team Lead","Senior Executive Member"];
  const years = ["2nd Year", "2nd Year"];
  //tech team 
const namesT = [
  "Obulshetty Srikari",
  "Partha Sarathi Srivastava",
  "Tanmay Sanjay Bilbile",
  "Anumay Amit Tiwari",
  "Heerekar Sneha Sree",
  "PRADHYUMAN CHOUDHARY",
  "Akash sinha",
  "Nachikethus V K"
];

const positionsT = [
  "Team Lead",
  "Senior Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive",
  "Executive"
];

const yearsT = [
  "3rd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "3rd Year",
  "3rd Year",
  "3rd Year",
  "2nd Year"
];
//socialmedia team 
const namesS=[
  "Abhijeet Pratap Singh",
  "Imaduddin Hammad",
  "Shriya Rathaur",
  "Kshirja Challa"
]

const positionsS = [
  "Team Lead",
  "Senior Executive Member",
  "Senior Executive",
  "Executive Member"
]

const yearsS = [
  "2nd Year", // Abhijeet Pratap Singh (224102)
  "2nd Year", // Shriya Rathaur (524175)
  "2nd Year", // Imaduddin Hammad (424134)
  "2nd Year"  // Kshirja Challa (524143)
];
const namesC = [
  "G V Sujith royal",
  "Mohammed Naveedh M",
  "Vedant",
  "PULIPATI V V PARDHIV KRISHNA SUBASH",
  "Ayushmaan Rawat",
  "Sankisa Sai Haasini",
  "Sampath Poluparthi",
  "Anand pal",
  "Manoj Kumar Sunda",
  "Lokesh Kumar Aloriya",
  "Sandeep kumar Saini",
  "N Srikanth",
  "Shravan Shetty",
  "Mann Gupta",
  "Januja M"
];

const positionsC = [
  "Joint Secretary",
  "Joint Secretary",
  "Team Lead",
  "Senior Executive Member",
  "Senior Executive",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive Member",
  "Executive",
  "Executive",
  "Executive"
]

const yearsC = [
  "4th Year",
  "3rd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year",
  "3rd Year",
  "2nd Year",
  "2nd Year",
  "2nd Year"
]


 const teamHeads = [
  {
    img: "teamlead1.jpg", // replace with actual path
    name: "Vedant",
    position: "Team Lead (Core Team)",
    year: "2nd Year, EEE",
  },
  {
    img: "teamlead2.jpeg", // replace with actual path
    name: "Abhijeet Pratap Singh",
    position: "Team Lead (Social Media & Content Writing)",
    year: "2nd Year, Chemical Engg",
  },
  {
    img: "teamlead3.jpg", // replace with actual path
    name: "Singh Adarsh Ramkripal",
    position: "Team Lead (PR & Outreach)",
    year: "2nd Year, Chemical Engg",
  },
  {
    img: "teamlead4.jpg", // replace with actual path
    name: "Chiranth M",
    position: "Team Lead (Design & Photography)",
    year: "2nd Year, EEE",
  },
  {
    img: "teamlead5.jpeg", // replace with actual path
    name: "Obulshetty Srikari",
    position: "Team Lead (Technical & Project Development)",
    year: "3rd Year, CSE",
  },
];


 const ExecutiveHeads = [
  {
    img: "sec.jpg", // replace with actual path
    name: "Vipul Yadav",
    position: "Secretary",
    year: "4th Year,Electrical And Electronics engineering",
  },
  {
    img: "csc.jpg", // replace with actual path
    name: "Tejendra",
    position: "Co-Secretary",
    year: "3rd Year,Electrical And Electronics engineering",
  },
  {
    img: "js1.jpeg", // replace with actual path
    name: "Mohammed Naveedh M",
    position: "Joint Secretary",
    year: "3rd Year, Mechanical Engineering",
  },
  {
    img: "js2.jpg", // replace with actual path
    name: "G V Sujith royal",
    position: "Team Lead (Design & Photography)",
    year: "4th Year,Computer Science Engineering",
  },

];

    const path = {
        Team: "/team",
        Home: "/",
        Contact: "/contact",
        About: "/about",
        Event: "/event",
      };
    return <>
    <div className="bg-slate-950 text-white h-screen w-screen overflow-x-hidden overflow-y-auto">
        <Navbar path={path}/>
         <img src="logo-white.png" alt="" className=" z-50 w-[60px] h-[60px] absolute top-[-12px] left-[-8px] md:mx-auto md:top-[-3px] md:left-[750px]"/>
         {/* <img src="g.png" alt="" className=" w-[100vw] h-[65vh] z-2 absolute top-0 right-0 opacity-30 pointer-events-none hidden md:block" /> */}
         <img src="1.jpg" alt="" className=" w-[100vw] h-[65vh] relative top-[-70px] pointer-events-none "/>
      <div data-aos='zoom-in'>
        <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[100vw] h-[15vh] md:w-[100vw] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[60px] text-center">
         <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[-400px]">Meet Our Team</h1>
        <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[-50px]">Explore our journey of fostering innovation through impactful events and workshops</h3>
      </div>
      <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative top-[100px] md:top-[70px] left-[150px] md:left-[652px]">Faculty Co-ordinator</p>
        <div className='relative top-[50px] md:left-[45px]' >
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px] md:left-[100px] md:w-[80vw] text-white bg-slate-950 ">
                    <img src="phaniSir.png" alt="" className="relative top-[-22px] object-cover rounded-t-xl md:mx-auto" />
                    <div className="w-[60vw] bg-slate-500 h-[2px] relative top-[-21px] md:w-[77vw]"></div>
                    <div className='text-slate-50 text-center font-bold' >
                        Dr. SRI PHANI KRISHNA KARRI
                        <p className='text-[14px]'>Faculty Co-ordinator, I&E Cell</p>

                        2025 - 2027</div>
                </SpotlightCard>
            </div>
             <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[100vw] h-[110vh] md:w-[100vw] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[60px] text-center">
             <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Executive Heads</h1>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 relative left-[-70px]" >
  {ExecutiveHeads.map((member, index) => (
    <div className='relative top-[10px]' >
                <SpotlightCard className=" w-[40vw] h-[43vh] relative top-[50px] left-[75px] md:left-[300px] md:w-[20vw] text-white ">
                     <img
        src={member.img}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full border-2 border-r-cyan-500 border-l-cyan-500 border-t-0 border-b-0 object-cover"
      />
                    <div className="w-[30vw] bg-slate-500 h-[2px] relative top-[8px] md:w-[16.5vw]"></div>
                     <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
      <p className="text-pink-500 font-medium">{member.position}</p>
      <p className="text-gray-300">{member.year}</p>
                </SpotlightCard>
            </div>

            
    
  ))}
</div>


             </div>

              <div class="relative bg-[url('/5.jpg')] bg-contain md:bg-cover bg-center bg-repeat-y md:bg-no-repeat opacity-90 mx-auto w-[100vw] h-[155vh] md:w-[100vw] bg-black/20 backdrop-blur-md border border-red-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[150px] text-center">
             <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent relative top-[-30px]">Team Heads</h1>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 relative left-[-70px]">
  {teamHeads.map((member, index) => (
    <div
      key={index}
      className={`relative top-[-62px] md:top-[-70px] ${
        index === teamHeads.length - 1 ? "relative left-[140px] md:left-[384px]" : ""
      }`}
    >
      <SpotlightCard className="w-[40vw] h-[46vh] relative top-[50px] left-[75px] md:left-[300px] md:w-[20vw] text-white">
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 mx-auto rounded-full border-2 border-r-red-500 border-l-red-500 border-t-0 border-b-0 object-cover"
        />
        <div className="w-[30vw] bg-slate-500 h-[2px] relative top-[8px] md:w-[16.5vw]"></div>
        <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-red-500 font-medium">{member.position}</p>
        <p className="text-gray-300">{member.year}</p>
      </SpotlightCard>
    </div>
  ))}
</div>



             </div>

              <div class="relative bg-[url('/3.jpg')] bg-contain md:bg-cover bg-center bg-repeat-y md:bg-no-repeat opacity-90 mx-auto w-[100vw] h-[300vh] md:w-[100vw] md:h-[170vh] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 top-[200px] text-center" >
               <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Team Members</h1>
        <h3 className="text-xl font-bold text-cyan-600">Specialized teams working together to achieve our mission</h3>
        <div className=" relative grid md:grid-cols-2 gap-6 md:left-[70px]">
         <div className='relative top-[10px]' > <p className="  text center w-[200px] relative top-[45px] left-[140px] font-bold">Design Team</p>
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px] md:left-[100px] md:w-[25vw] text-white ">
                   <div className=" w-[70vw] relative left-[-87px]">
                     <AnimatedList2
                        items={names}
                        icons={years}
                        para={positions}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        displayScrollbar={true}
                    />
                   </div>
                </SpotlightCard>
            </div>
             <div className='relative top-[10px]' > <p className="  text center w-[200px] relative top-[45px] left-[140px] font-bold">Tech Team</p>
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px] md:left-[100px] md:w-[25vw] text-white ">
                   <div className=" w-[70vw] relative left-[-87px]">
                     <AnimatedList2
                        items={namesT}
                        icons={yearsT}
                        para={positionsT}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        displayScrollbar={true}
                    />
                   </div>
                </SpotlightCard>
            </div>
             <div className='relative top-[10px]' > <p className="  text center w-[200px] relative top-[45px] left-[140px] font-bold">Social Media Team</p>
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px] md:left-[100px] md:w-[25vw] text-white ">
                   <div className=" w-[70vw] relative left-[-87px]">
                     <AnimatedList2
                        items={namesS}
                        icons={yearsS}
                        para={positionsS}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        displayScrollbar={true}
                    />
                   </div>
                </SpotlightCard>
            </div>
            <div className='relative top-[10px]' > <p className="  text center w-[200px] relative top-[45px] left-[140px] font-bold">Core Team</p>
                <SpotlightCard className=" w-[70vw] relative top-[50px] left-[75px] md:left-[100px] md:w-[25vw] text-white ">
                   <div className=" w-[70vw] relative left-[-87px]">
                     <AnimatedList2
                        items={namesC}
                        icons={yearsC}
                        para={positionsC}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        displayScrollbar={true}
                    />
                   </div>
                </SpotlightCard>
            </div>
            </div>
              </div>
      </div>
       <div className="bg-black relative top-[220px]">
          <div className="w-[80vw] h-[1px] bg-amber-300 mx-auto relative "></div>
        <div className="relative top-[-42px]"><Footer/></div>
        </div>
  </div>
    </>
}
export default Team;