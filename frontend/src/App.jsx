import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Contact from "./pages/contact";
import Event from "./pages/event";
import About from "./pages/about";
import Team from "./pages/team";
import Home from "./pages/home";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App(){
  useEffect(() => {
    AOS.init({
      duration: 1500,
       once: true,   // 👈 re-trigger on scroll
      
    });
    <Navigate to="/" />; // redirect to home when app loads
  }, []);
  return<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/team' element={<Team/>}/>
     {/* Catch-all route → redirect unknown paths to Home */}
        <Route path="*" element={<Home />} />
  </Routes>
  </BrowserRouter>
  </>
}
export default App
