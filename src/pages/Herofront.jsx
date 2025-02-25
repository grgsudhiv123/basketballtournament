import {videos, Logos, Texts} from "../Constants/Constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/text/Untitled/BEYOND.SVG"

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
    <div className="relative w-full h-screen">
        {/* <div className="absolute max-w-screen-lg mx-auto top-10 bg-white transform translate-x-full">
            <img src={Logos.bsktBallLogo} alt="" className="w-20 h-20"/>
        </div> */}
        <div>
        <video
            ref={videoRef}
            className="w-full h-screen object-cover"
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
        <div className="absolute flex top-5 z-20 text-white">
            <image src={img1} alt="beyond" className="w-10 color:"/>
            <p>hello</p>
        </div>
        <div className="absolute w-full xl:mx-52 top-1/3 xl:top-1/2 uppercase font-bruce transform translate-x-5 xl:typing-effectxl">
            <h1 className="text-white text-sm xl:text-lg  border-yellow-400 fade">the ultimate</h1>
            <h1 className="text-yellow-400 text-5xl xl:text-6xl fade font-extrabold">kickoff</h1>
            <h1 className="text-white text-[10px] xl:text-xs  overflow-hidden whitespace-nowrap typing-effect typing-effect-xl">Transform Your Tomorrow, Today</h1>
        </div>
    </div>
  )
}

export default Herofront