import {imageBskt} from "../Constants/Constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import img1 from "../assets/text/Untitled/BEYOND.SVG"


import BackgroundSVG from "../Constants/BackgroundSVG";

gsap.registerPlugin(ScrollTrigger)

const Herofront = () => {

    useEffect(()=>{

        gsap.fromTo(
            ".fade",
            {
                
                opacity:0,
            },{
                opacity:1,
                delay:1/2,
                duration:1,

            }
        )

        gsap.fromTo(
            ".heroImg",
            { 
                x: 300, 
                opacity: 0 
            }, // Start position: Right (200px) & invisible
            { 
                x: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power2.out" } // End position: Original with fade-in
            );
        
        gsap.fromTo(
            ".textFooter",
            { 
                y: 100, 
                opacity: 0 
            }, // Start position: Right (200px) & invisible
            { 
                y: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power2.out" } // End position: Original with fade-in
            );


    
        gsap.fromTo(
            '.typing-effect-xl',
            {
                width:'0%',
            },{
                width:'100%',
                duration:3,
                ease:'step(900)',
                delay:1,
            }
        )

    }, [])
  return (
    <div id="home" className="max-w-screen h-[700px] xl:h-screen m-0 bg-gradient-to-b from-[#648899] via-[#648899]  to-white ">
        <div className="relative bg-contain w-full h-full">
            <BackgroundSVG/>
            <div className=" w-full h-full flex flex-col justify-center max-md:flex-wrap gap-10 xl:gap-0 xl:top-5 text-white fade z-5">
            <div className="relative flex flex-col-reverse xl:flex-row justify-end items-center max-w-screen-2xl mx-auto overflow-visible">
                {/* Position the text element with negative margin or absolute positioning to create overlap */}
                <div className=" whitespace-nowrap flex flex-col justify-start items-start w-fit uppercase font-bruce xl:typing-effectxl z-20 relative">
                    <h1 className="text-white text-sm xl:text-lg border-yellow-400 fade">the ultimate</h1>
                    <h1 className="text-yellow-400 text-5xl xl:text-7xl fade font-extrabold">playoff</h1>
                    <h1 className="text-white text-[10px] xl:text-xs overflow-hidden whitespace-nowrap typing-effect typing-effect-xl">Transform Your Tomorrow, Today</h1>
                </div>
                
                {/* Adjust the position of the image container */}
                <div className="w-full h-full heroImg flex justify-center relative xl:-ml-48"> {/* Added negative margin to create overlap */}
                <img src={imageBskt.belowfeet} alt="" className="w-[400px] xl:w-[600px] z-20 pb-14"/>
                </div>
            </div>
            
            <div className="textFooter w-screen-2xl mx-auto mb-0 xl:mb-10 ">
                <p className=" font-bruce text-[9px] xl:text-[16px] text-slate-600">{`The ball doesn't lie, if you put in the work,`}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Herofront   