
import { FaFacebookF, FaInstagram  , FaTwitter } from "react-icons/fa";

import {Logos} from "../Constants/Constants"

const Footer = () => {
  return (
    <div className="relative w-full h-auto bg-[url('./assets/images/halfcourt.jpg')] bg-cover  bg-no-repeat bg-top">
      <div className="absolute w-full h-full m-0 bg-slate-600 opacity-40 overflow-hidden z-0"></div>
      <div className="relative max-w-screen-xl mx-auto h-auto flex flex-col py-10 xl:gap-10">
        <div className="flex flex-col xl:flex-row w-full xl:gap-5">
          <div className="flex-1 p-5 flex flex-col items-start font-montesrrat gap-1">
            <p className="text-slate-100 text-2xl">Information</p>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Our Company</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Contact Us</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Our Services</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Why We?</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Careers</a>
          </div>
          <div className="flex-1 p-5 flex flex-col items-start font-montesrrat gap-1">
            <p className="text-slate-100 text-2xl">QuickLink</p>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">About</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Blog</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Shop</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Cart</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Contact</a>
          </div>
          <div className="flex-1 p-5 flex flex-col items-start font-montesrrat gap-1">
            <p className="text-slate-100 text-2xl">Support</p>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Blog</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Contact</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Refund Policy</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Online Support</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">Money Back</a>
          </div>
          <div className="flex-1 p-5 flex flex-col items-start font-montesrrat gap-1">
            <p className="text-slate-100 text-2xl">Contacts</p>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">5678 Everest Marg, Ward No. 5, Baneshwor, Kathmandu, Nepal</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">https;//example.com</a>
            <a href="#" className="text-slate-200 text-md hover:text-yellow-400 duration-300 ease-in-out">(+977) 9632563216</a>
          </div>
        </div>
        <div className="relative w-full h-auto flex flex-col xl:flex-row  xl:gap-10">
          <div className="flex-1 p-2 xl:p-5 flex flex-col items-center font-montesrrat">
            <img src={Logos.teamLogo} alt="" className="w-1/4"/>
          </div>
          <div className="flex-1 p-2 xl:p-5 flex flex-col justify-center items-center font-montesrrat text-slate-200 tracking-wide">
            <p>© Copyright 2025. by NaiveGuy</p>
          </div>
          <div className="flex-1 p-2 xl:p-5 flex flex-row font-montesrrat items-center justify-center gap-5">
            <FaFacebookF  className="text-slate-200 hover:bg-pink-700 text-4xl bg-cyan-800 rounded-full duration-300 ease-in-out p-2 cursor-pointer" />
            <FaInstagram   className="text-slate-200 hover:bg-pink-700 text-4xl bg-cyan-800 rounded-full duration-300 ease-in-out p-2 cursor-pointer" />
            <FaTwitter className="text-slate-200 hover:bg-pink-700 text-4xl bg-cyan-800 rounded-full duration-300 ease-in-out p-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer