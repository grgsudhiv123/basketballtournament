import Buttons from "./Buttons"
import { useEffect } from "react";
import gsap from "gsap";
const Navbar = () => {
    useEffect(()=> {
        gsap.fromTo(
            '.navbarAni', {
                opacity : 0, 
                y : -100
            }, {
                y: 0, 
                opacity: 1, 
                duration: 1.5, 
                ease: "power2.out"   
            }
        )
    },[])
  return (
    <div className="bg-[#648899] w-screen">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between p-6 items-center navbarAni">
            <h1>Logo</h1>
            <div className="flex flex-row gap-20 uppercase font-bruce text-sm">
                <a href="home" className="text-slate-200 hover:text-slate-400 ease-in-out duration-200 active:text-slate-300">Home</a>
                <a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Tournaments</a>
                <a href="Aboutus" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">About Us</a>
                <a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Contact</a>
            </div>
            <Buttons name="Register"/>
        </div>
    </div>
  )
}

export default Navbar