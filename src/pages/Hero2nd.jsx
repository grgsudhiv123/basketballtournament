import {imageBskt} from "../Constants/Constants"
import Buttons from "../components/Buttons"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react"


const Hero2nd = () => {
        useEffect(()=> {
        gsap.fromTo(
            '.box1', {
                opacity : 0, 
                x : -200
            }, {
                x: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power3.out",
                scrollTrigger:{
                    trigger:".box1",
                    start:"top 80%",
                    end:"top 50%",
                    scrub:2,
                    once:true,
                }   
            }
        )

        gsap.fromTo(
            '.bigNum1', {
                opacity : 0, 
                x : 100
            }, {
                x: 0, 
                opacity: 1, 
                duration: 2, 
                delay:1, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".bigNum1",
                    start:"top 50%",
                    end:"top 50%",
                    scrub:2,
                    once:true,
                }    
            }
        )

        gsap.fromTo(
            '.bigNum2', {
                opacity : 0, 
                y : 100
            }, {
                y: 0, 
                opacity: 1, 
                duration: 2,
                delay:1, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".bigNum2",
                    start:"top 50%",
                    end:"top 50%",
                    scrub:2,
                    once:true,
                }    
            }
        )

        gsap.fromTo(
            '.yellowBox', {
                opacity : 0, 
                y : -50
            }, {
                y: 0, 
                opacity: 1, 
                duration: 3, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".yellowBox",
                    start:"top 80%",
                    end:"top 80%",
                    scrub:2,
                    once:true,
                }    
            }
        )

        gsap.fromTo(
            '.imageDunk', {
                opacity : 0, 
                y : 200
            }, {
                y: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".imageDunk",
                    start:"top 80%",
                    end:"top 50%",
                    scrub:1,
                    once:true,
                }   
            }
        )
    },[])
  return (
        <div className="relative h-screen w-full mb-10 overflow-hidden">
            <div className="max-w-screen-xl mx-auto h-screen flex flex-col xl:flex-row items-center px-5 xl:p-0 gap-10 xl:gap-0">
                <div className="flex-1 flex flex-col gap-5 justify-center box1">
                    <h1 className="font-bruce text-sm xl:text-xl font-bold uppercase">How we <span className="block text-4xl xl:text-7xl text-gray-500">started</span> our journey ?</h1>
                    <p className="text-sm xl:text-lg font-montserrat text-justify">We are one of the newest basketball community in the town. Our aim is to become the most renowned basketball community across the country and to promote the players.</p>
                    <div className="w-1/3">
                        <Buttons name={"Read more"}/>
                    </div>
                </div>
                <div className="relative flex-1 flex items-end ">
                <div className="absolute bg-yellow-400 w-[60%] xl:w-96 h-full translate-x-1/3 transform xl:translate-x-1/3 top-0 -z-0 shadow-xl yellowBox "></div>
                    <img src={imageBskt.dunk} alt="holding a ball" className="w-[300px] xl:w-[500px] object-contain z-10 imageDunk"/>
                    <div className="absolute top-0 -right-[16px] xl:-right-[0px] flex gap-1 xl:gap-3">
                        <h1 className="text-[120px] xl:text-[200px] font-bulls font-extrabold text-white bigNum1">1</h1>
                        <h1 className="text-[120px] xl:text-[200px] font-bulls font-extrabold text-yellow-400 bigNum2">3</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero2nd