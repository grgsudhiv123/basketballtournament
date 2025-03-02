import {imageBskt} from "../Constants/Constants"
import Buttons from "../components/Buttons"

import { useEffect } from "react"
import gsap from "gsap"

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
                ease: "power2.out"   
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
                ease: "power2.out"   
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
                ease: "power2.out"   
            }
        )

        gsap.fromTo(
            '.yellowBox', {
                opacity : 0, 
                y : -300
            }, {
                y: 0, 
                opacity: 1, 
                duration: 3, 
                ease: "power2.out"   
            }
        )

        gsap.fromTo(
            '.imageDunk', {
                opacity : 0, 
                y : 100
            }, {
                y: 0, 
                opacity: 1, 
                duration: 3, 
                ease: "power2.out"   
            }
        )

    },[])
  return (
        <div className="relative h-screen w-full">
            <div className="max-w-screen-xl mx-auto h-screen flex flex-row items-center">
                <div className="flex-1 flex flex-col gap-5 box1">
                    <h1 className="font-bruce text-xl font-bold uppercase">How we <span className="block text-7xl text-gray-500">started</span> our journey ?</h1>
                    <p className="text-lg font-montserrat text-justify">We are one of the newest basketball community in the town. Our aim is to become the most renowned basketball community across the country and to promote the players.</p>
                    <div className="w-1/3">
                        <Buttons name={"Read more"}/>
                    </div>
                </div>
                <div className="relative flex-1 flex items-end">
                <div className="absolute bg-yellow-400 w-96 h-full transform translate-x-1/3 top-0 -z-0 shadow-xl yellowBox"></div>
                    <img src={imageBskt.dunk} alt="holding a ball" className="w-[500px] object-contain z-10 imageDunk"/>
                    <h1 className="absolute top-0 right-[120px]  text-[200px] font-montserrat font-extrabold text-white bigNum1">1</h1>
                    <h1 className="absolute top-0 right-[7px] text-[200px] font-montserrat font-extrabold text-yellow-400 bigNum2">3</h1>
                </div>
            </div>
        </div>
  )
}

export default Hero2nd