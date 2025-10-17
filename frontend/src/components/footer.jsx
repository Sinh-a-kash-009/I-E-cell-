import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";
function Footer(){
    return <>
    <div className="flex justify-center align-middle relative top-[30px] "><img src="logo-white.png" alt="" className="w-[60px] h-[60px]"/>
    <p className="relative top-[15px] left-[-18px]">I&E cell NIT ANDHRA</p>
    </div>
            <div className='flex justify-around relative top-[25px] w-[85vw] left-[55px] md:left-[176px] '>
                <div>
                    <h2 className="text-green-400 font-bold">Quick Links</h2>
                        <p className='hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent'><Link to="/">Home</Link></p>
                        <p className='hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent'><Link to="/about">About</Link></p>
                        <p className='hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent'><Link to="/contact">Contact</Link></p>
                        <p className='hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent'><Link to="/team">Team</Link></p>
                        <p className='hover:cursor-pointer hover:scale-170 transition-transform duration-200 mr-4 font-bold hover:bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text hover:text-transparent'><Link to="/event">Events</Link></p>
                </div>
                <div> <h2 className="text-green-400 font-bold mb-4">Contact Us</h2>
                <div className='relative left-[26px]  hover:cursor-pointer'><a href="https://www.instagram.com/e_cell_nitandhrapradesh/" target="_blank" rel="noopener noreferrer"><Instagram className='hover:text-red-500 hover:scale-190 hover:transition-transform duration-400 mb-2'/></a>
                <a
  href="https://www.facebook.com/eandicellnitandhrapradesh"
  target="_blank"
  rel="noopener noreferrer"
>
  <Facebook
    className="hover:text-blue-500  transition-transform duration-400 hover:scale-190 mb-2"
  />
</a>

                <a
  href="https://www.linkedin.com/company/ecellnitandhra/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin
    className="hover:text-cyan-500  transition-transform duration-200 hover:scale-190 mb-2"
  />
</a>
</div>
                </div>
                <div><h2  className="text-green-400 font-bold mb-2">Reach Us</h2>
                    <p>Address: NIT AnP,India</p>
                          <p>Pincode:534101</p>
                          <p>Email: eicell@nitandhra.ac.in</p>
                </div>
            </div>
            <div className='w-[70vw] relative top-[30px] left-[81px] text-slate-400 md:left-[600px] md:w-[40vw]'>2025 E-Cell, NIT Andhra Pradesh. All rights reserved.</div>
    </>
}
export default Footer;