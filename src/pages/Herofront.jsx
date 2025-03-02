import {videos, Logos, BoldText, imageBskt} from "../Constants/Constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import img1 from "../assets/text/Untitled/BEYOND.SVG"


import BackgroundSVG from "../Constants/BackgroundSVG";

gsap.registerPlugin(ScrollTrigger)

const Herofront = () => {

    const videoRef = useRef(null);
    useEffect(()=>{
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.playsInline = false;
        }

        const playVideo = async () => {
            try{
                await video.play();
            } catch(error) {
                console.error("Autoplay failed : ", error)
            }
        }

        gsap.delayedCall(0.5, playVideo)
 
        gsap.fromTo(
            videoRef.current,
            {opacity:0},
            {opacity:1, scale: 1, duration:5, delay:2, ease:'power2.out'}
        )

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
                duration: 1, 
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
    <div id="home" className="max-w-screen h-screen m-0">
        <div className="relative bg-contain w-full h-full">
            <BackgroundSVG/>
            <div className=" w-full h-full flex flex-col justify-center max-md:flex-wrap gap-5 xl:gap-0 xl:top-5 text-white fade z-5">
            <div className="relative flex flex-row justify-end items-center max-w-screen-2xl mx-auto overflow-visible">
                {/* Position the text element with negative margin or absolute positioning to create overlap */}
                <div className=" whitespace-nowrap flex flex-col justify-start items-start w-fit uppercase font-bruce xl:typing-effectxl z-20 relative">
                    <h1 className="text-white text-sm xl:text-lg border-yellow-400 fade">the ultimate</h1>
                    <h1 className="text-yellow-400 text-6xl xl:text-8xl fade font-extrabold">playoff</h1>
                    <h1 className="text-white text-[10px] xl:text-xs overflow-hidden whitespace-nowrap typing-effect typing-effect-xl">Transform Your Tomorrow, Today</h1>
                </div>
                
                {/* Adjust the position of the image container */}
                <div className="heroImg flex relative -ml-48"> {/* Added negative margin to create overlap */}
                <img src={imageBskt.belowfeet} alt="" className="max-sm:w-[200px] xl:w-[700px] z-20 pb-14"/>
                </div>
            </div>
            
            <div className="textFooter w-screen-2xl mx-auto mb-10">
                <p className=" font-bruce text-xs xl:text-lg text-slate-700">{`The ball doesn't lie, if you put in the work,`}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Herofront   