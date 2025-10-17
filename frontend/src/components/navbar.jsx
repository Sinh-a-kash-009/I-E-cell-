import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import VantaBackground from "../components/vantaBackground";
function Navbar({path}) {
    const keys = Object.keys(path);
    const values = Object.values(path);
    const [open, setOpen] = useState(false);
    return <>
     <div className=" z-10 absolute left-[420px] inline-block text-left md:hidden ">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2  text-white font-semibold rounded-lg  transition "
      >
        <Menu size={20} />
        Menu
        {/* <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        /> */}
      </button>

      {/* Dropdown Items */}
      {open && (
        <div className="absolute left-[1px] mt-2 w-18 bg-black/20 mx-auto border border-r-cyan-400 ">
          <ul className="">
            <li>
                
              <p className="bg-slate-600 rounded-3xl w-[80px] text-center   hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent relative left-[-7px] "><Link to={values[0]}>{keys[0]}</Link></p>
            </li>
            <li>
              <p className=" w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent "><Link to={values[1]}>{keys[1]}</Link></p>
            </li>
            <li>
             <p className=" w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent"><Link to={values[2]}>{keys[2]}</Link></p>
            </li>
            <li>
                <p className=" w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r  from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent"><Link to={values[3]}>{keys[3]}</Link></p>
            </li>
            <li>
                <p className=" w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent"><Link to={values[4]}>{keys[4]}</Link></p>
            </li>
          </ul>
        </div>
      )}
    </div>
       <div class=" mx-auto w-[80vw] h-[10vh] md:w-[90vw] bg-black/20 backdrop-blur-md border border-slate-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6 sticky  top-0 z-50 hidden md:block">
            <div className="flex justify-between">
               <div className="flex">
                 <p className="bg-slate-600 rounded-3xl w-[80px] text-center  hover:bg-slate-500 hover:cursor-pointer hover:scale-170 transition-transform duration-200 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent "><Link to={values[0]}>{keys[0]}</Link></p>
               </div>
                <div className="flex relative left-0.5 md:left-8">
                <p className="text-white w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent "><Link to={values[1]}>{keys[1]}</Link></p>
                <p className="text-white w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent "><Link to={values[2]}>{keys[2]}</Link></p>
                <p className="text-white  w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent "><Link to={values[3]}>{keys[3]}</Link></p>
                <p className="text-white  w-[60px] text-center  hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4  font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent "><Link to={values[4]}>{keys[4]}</Link></p>
                </div>
            </div>
        </div>
    </>
}
export default Navbar