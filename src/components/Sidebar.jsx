import { X } from "lucide-react"
import Buttons from "./Buttons"
import {UseBasketballContext} from "../context/basketballContext"

import {useEffect} from "react"

const Sidebar = () => {
    const {toggle,setToggle} = UseBasketballContext()
        useEffect(() => {
        console.log("Toggle State Changed:", toggle);
    }, [toggle]); // Log whenever `toggle` changes
    const handleClick = () => {
        setToggle((prev) => !prev); 
    };
  return (
    <div className="absolute w-screen h-screen overflow-hidden z-30 top-0 m-0 flex justify-end">
        <div className={`relative w-3/4 h-full bg-slate-500 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${toggle ? 'translate-x-0 ' : 'translate-x-full'}`}>
            <ul className=" flex flex-col gap-7 uppercase font-bruce text-sm">
                <div className="w-full flex justify-end">
                    <span 
                    className="md:hidden"
                    onClick = {handleClick}
                        >
                    <X size={24}/>
                    </span>
                </div>
                <li><a href="home" className="text-slate-200 hover:text-slate-400 ease-in-out duration-200 active:text-slate-300">Home</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Tournaments</a></li>
                <li><a href="Aboutus" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Contact</a></li>
            </ul>
                <Buttons name="Register Team"/>
           </div>
    </div>
  )
}

export default Sidebar