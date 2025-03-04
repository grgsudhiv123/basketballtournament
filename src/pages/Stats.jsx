
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react"

const Stats = () => {
    useEffect(()=> {
        gsap.fromTo(
            '.div1', {
                opacity : 0, 
                x : -200
            }, {
                x: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".div1",
                    start:"top 80%",
                    end:"top 80%",
                    scrub:2,
                    once:true,
                }   
            }
        )

        gsap.fromTo(
            '.div2', {
                opacity : 0, 
                scale : 0,
            }, {
                scale : 1, 
                opacity: 1, 
                duration: 2, 
                ease: "elastic.out(0.5, 1)",
                scrollTrigger:{
                    trigger:".div2",
                    start:"top 80%",
                    end:"top 80%",
                    scrub:2,
                    once:true,
                }    
            }
        )

        gsap.fromTo(
            '.div3', {
                opacity : 0, 
                x : 100
            }, {
                x: 0, 
                opacity: 1, 
                duration: 2,
                delay : 1, 
                ease: "power2.out",
                scrollTrigger:{
                    trigger:".div3",
                    start:"top 80%",
                    end:"top 80%",
                    scrub:2,
                    once:true,
                }    
            }
        )
    },[])
  return (
    <div className="w-full h-auto xl:h-28 mx-5 xl:mx-0 my-16 xl:my-28">
        <div className="max-w-screen-lg mx-auto h-full flex flex-col xl:flex-row  justify-between gap-16">
            <div className="border-l-4 border-orange-400 flex flex-col justify-center flex-1 p-4 bg-gradient-to-r from-yellow-100 to-transparent div1">
                <h1 className="text-4xl font-lakers tracking-widest">Boston Celtics</h1>
                <p className="text-sm uppercase text-yellow-600 font-bulls tracking-widest font-bold">nba winner 2024</p>
            </div>
            <div className="border-l-4 border-orange-400 flex flex-col justify-center flex-1 p-4 bg-gradient-to-r from-yellow-100 to-transparent div2">
                <h1 className="text-4xl font-lakers tracking-widest">18 <span className="text-sm align-top">th</span> NBA title</h1>
                <p className="text-sm uppercase text-yellow-600 font-bulls tracking-widest font-bold">C-Green Smash Machine</p>
            </div>
            <div className="border-l-4 border-orange-400 flex flex-col justify-center flex-1 p-4 bg-gradient-to-r from-yellow-100 to-transparent div3">
                <h1 className="text-4xl font-lakers tracking-widest">64-18 record </h1>
                <p className="text-sm uppercase text-yellow-600 font-bulls tracking-widest font-bold">25th-best winning percentage </p>
            </div>
        </div>
    </div>
  )
}

export default Stats
