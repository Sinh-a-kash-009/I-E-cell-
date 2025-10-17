import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useMutation,useQueryClient } from '@tanstack/react-query';
import {sendData} from '../axios/axios';
function Contact(){
    const path= {
  Contact: "/contact",
  Home: "/",
  About: "/about",
  Team: "/team",
  Event: "/event",
}; 
const queryClient =useQueryClient();
function handlesubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const subject=e.target.subject.value;
    const message=e.target.message.value;
    const formdata={
        name,
        email,
        subject,
        message
    }
    mutate(formdata);
}
const {mutate}=useMutation({
        mutationFn:sendData,
        onSuccess:()=>{
          alert('data sent to server');
            queryClient.invalidateQueries({queryKey:['formdata']});
            document.querySelector("form").reset();
        },
        onError:()=>{
            console.log('error');
        }
    })


    return <>
    <div className="bg-slate-950 text-white h-screen w-screen overflow-auto">
        <Navbar path={path}/>
         <img src="logo-white.png" alt="" className=" z-50 w-[60px] h-[60px] absolute top-[-12px] left-[-8px] md:mx-auto md:top-[-3px] md:left-[750px]"/>
          <img src="1.jpg" alt="" className="w-[100vw] h-[65vh] relative top-[-70px] right-0  pointer-events-none" />
        
         <div class="relative bg-[url('/3.jpg')] bg-cover bg-center bg-no-repeat opacity-90 mx-auto w-[80vw] h-[60vh] md:w-[90vw] bg-black/20 backdrop-blur-md border border-cyan-500 border-opacity-20 border-b-0 border-t-0 rounded-3xl p-6  top-[30px]  text-center"data-aos="zoom-in" >
         <h1 className="text-6xl relative top-[-341px] font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Contact Us</h1>
         <h3 className="text-4xl  font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Have questions or want to collaborate? We'd love to hear from you.</h3>
          <div className='mt-1.5' >
            <form onSubmit={(e)=>{handlesubmit(e)}} className='flex flex-col '>
            <input type="text" name="name" placeholder="Your Name" required  className="border-white  border-t-0 border-1 rounded-xl mb-1.5 hover:scale-110 transition-transform duration 300"/>
            <input type="email" name="email" placeholder="Your Email" required  className="border-white  border-t-0 border-1 rounded-xl mb-1.5 hover:scale-110 transition-transform duration 300"/>
            <input type="text" name="subject" placeholder="Subject" required  className="border-white   border-t-0 border-1 rounded-xl mb-2.5 hover:scale-110 transition-transform duration 300"/>
            <hr className="border-white border-b-0 border-t-0 border-1 rounded-xl mb-1.5"/>
            <textarea name="message" placeholder="Your Message" required  className="border-white  border-t-0 border-1 rounded-xl mb-1.5 hover:scale-110 transition-transform duration 300"></textarea>
            <button type="submit" className=" relative left-[150px] w-[100px] hover:cursor-pointer z-23 hover:scale-120 transition-transform duration 300 border-cyan-600 border-1 rounded-xl hover:border-b-0 hover:border-t-0 md:left-[620px]">Send</button>
          </form>
          </div>
         </div>
        <div className=" bg-black relative top-[111px]">
          <div className="w-[80vw] h-[1px] bg-amber-300 mx-auto relative "></div>
        <div className="relative top-[-42px]"><Footer/></div>
        </div>
        
  </div>
    </>
}
export default Contact;