import { X } from "lucide-react"
import Buttons from "./Buttons"
import { useBasketballContext } from "../context/basketballContext"
import { useEffect } from "react"

const Sidebar = () => {
    const { toggle, setToggle } = useBasketballContext()

    useEffect(() => {
        // console.log("Toggle State Changed:", toggle);
    }, [toggle]);

    const handleClick = () => {
        setToggle((prev) => !prev);
    };

    return (
        <div className={`absolute w-screen h-screen overflow-hidden z-30 top-0 m-0 flex justify-end ${toggle ? 'visible' : 'invisible'} duration-500 ease-in-out`}>
            <div className="relative w-1/4 h-full"  onClick={handleClick}></div>
            <div 
                className={`relative w-3/4 h-full bg-slate-800 bg-opacity-95 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden 
                    ${toggle ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="w-full h-full flex flex-col uppercase font-bruce text-sm">
                    <div className="w-full flex justify-end p-6">
                        <span 
                            className="md:hidden cursor-pointer"
                            onClick={handleClick}
                        >
                            <X size={24} className="text-slate-300"/>
                        </span>
                    </div>
                    <div className="flex w-full h-full flex-col justify-between">
                        <div className="flex flex-col w-full gap-5 p-6">
                            <div className="text-slate-200 text-xs hover:text-slate-400 ease-in-out duration-200 active:text-slate-300 w-full"><a href="home" >Home</a></div>
                            <div className="text-slate-400 text-xs hover:text-slate-200 ease-in-out duration-200 active:text-slate-400"><a href="#">Match Stats</a></div>
                            <div className="text-slate-400 text-xs hover:text-slate-200 ease-in-out duration-200 active:text-slate-400"><a href="#">Tournaments</a></div>
                            <div className="text-slate-400 text-xs hover:text-slate-200 ease-in-out duration-200 active:text-slate-400"><a href="#">Upcoming events</a></div>
                            <div className="text-slate-400 text-xs hover:text-slate-200 ease-in-out duration-200 active:text-slate-400"><a href="Aboutus">About Us</a></div>
                            <div className="text-slate-400 text-xs hover:text-slate-200 ease-in-out duration-200 active:text-slate-400"><a href="#">Contact</a></div>
                        </div>
                        <div className="w-3/4 mx-auto flex justify-center mb-20 ">
                            <Buttons name="Register Team"/>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar