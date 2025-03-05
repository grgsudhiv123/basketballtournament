import Buttons from "./Buttons"
import { useEffect} from "react";
import gsap from "gsap";
import {Logos} from "../Constants/Constants"
import { Menu} from "lucide-react"

import {useBasketballContext} from "../context/basketballContext"

const Navbar = () => {
    const {toggle,setToggle} = useBasketballContext()
    
    const handleClick = () => {
        setToggle((prev) => !prev); 
    };
    
    useEffect(() => {
        if(toggle) {
            // document.body.style.pointerEvents = 'none'
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return ()=>(document.body.classList.remove = 'no-scroll')
    }, [toggle]);



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
        <div className="relative max-w-screen-xl mx-2 xl:mx-auto flex flex-row justify-between items-center p-2 xl:p-3 md:navbarAni">
            <img src={Logos.teamLogo} alt="" className="w-12 xl:w-24"/>
            <ul className="hidden md:flex flex-row gap-20 uppercase font-bruce text-sm ">
                <li><a href="home" className="text-slate-200 hover:text-slate-400 ease-in-out duration-200 active:text-slate-300">Home</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Tournaments</a></li>
                <li><a href="Aboutus" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Contact</a></li>
            </ul>
            <div className="hidden xl:flex ">
                <Buttons name="Register"/>
            </div>
            <span 
                className="md:hidden"
                onClick = {handleClick}
            >
                <Menu size={24}/>
            </span>
        </div>
    </div>
  )
}

export default Navbar