import {videos, Logos, BoldText} from "../Constants/Constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import img1 from "../assets/text/Untitled/BEYOND.SVG"

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
                duration:5,

            }
        )

        
        gsap.fromTo(
            '.typing-effect-xl',
            {
                width:'0%',
            },{
                width:'100%',
                duration:10,
                ease:'step(1000)',
                delay:2,
            }
        )

        gsap.to (
            ".rotate",{
                rotation : 360,
                // duration : 10,
                // ease : 'none',
            }
        )

        // gsap.fromTo(
        //     '.typing-effect',
        //     {
        //         width:'0%',
        //     },{
        //         width:'100%',
        //         duration:5,
        //         ease:'step(100)',
        //         delay:1,
        //     }
        // )
    }, [])
  return (
    <div className="relative max-w-screen h-screen">
        {/* <div className="absolute max-w-screen-lg mx-auto top-10 rotate">
            <img src={Logos.bsktBallLogo} alt="" className="w-20 h-20"/>
        </div> */}
        <div className="">
            <video
                ref={videoRef}
                className="absolute w-full h-screen object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                src={videos.heroPage}
                type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="fixed  w-full h-full flex flex-col max-md:flex-wrap gap-5 xl:gap-10 xl:top-5 z-10 text-white fade">
            <div className="flex-1 flex flex-col justify-end items-center">
                <img src={BoldText.Beyond} alt="beyond" className="max-sm:w-[300px] xl:w-[1000px] "/>     
                <img src={BoldText.Limits} alt="" className="max-sm:w-[200px] xl:w-[500px]"/>
            </div>
            <div className="flex-1 text-center">
                <p className="pt-44 font-bruce text-xs xl:text-lg ">{`The ball doesn't lie put in the work,`}</p>
            </div>
        </div>
    </div>
  )
}

export default Herofront   