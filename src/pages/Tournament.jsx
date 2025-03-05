import {imageBskt} from "../Constants/Constants"
import { useEffect } from "react"
import gsap from "gsap"

import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Tournament = () => {
    useEffect(()=> {
    gsap.fromTo(
      ".one",{
        opacity:0,
        x:-200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger:{
          trigger:".one",
          start:"top 80%",
          end:"top 50%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".two",{
        opacity:0,
        x:-200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 2,
        delay:1, 
        ease: "power3.out",
        scrollTrigger:{
          trigger:".two",
          start:"top 80%",
          end:"top 50%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".three",{
        opacity:0,
        x:-200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 3, 
        delay : 3,
        ease: "power2.out",
        scrollTrigger:{
          trigger:".three",
          start:"top 80%",
          end:"top 80%",
          scrub:2,
          once:true,
        }   
      }
    )

     gsap.fromTo(
      ".four",{
        opacity:0,
        x:-200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 4, 
        delay : 4,
        ease: "power2.out",
        scrollTrigger:{
          trigger:".four",
          start:"top 80%",
          end:"top 80%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".five",{
        opacity:0,
        y:200
      }, {
        y: 0, 
        opacity: 1, 
        duration: 4, 
        delay : 5,
        ease: "power2.out",
        scrollTrigger:{
          trigger:".five",
          start:"top 80%",
          end:"top 80%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".six",{
        opacity:0,
        y:-200
      }, {
        y: 0, 
        opacity: 1, 
        duration: 4, 
        delay : 6,
        ease: "power2.out",
        scrollTrigger:{
          trigger:".six",
          start:"top 50%",
          end:"top 50%",
          scrub:2,
          once:true,
        }   
      }
    )
  },[])
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col xl:flex-row">
        <div className="flex-1 h-full">
          <div className="h-full mx-10 flex flex-col justify-center items-end uppercase gap-5 xl:gap-16">
            <h1 className="text-lg xl:text-2xl font-bulls font-bold uppercase text-slate-900 tracking-widest one">- The Battle of Glory</h1>

            <div className="flex flex-col items-end gap-0">
              <div className="flex flex-row gap-1 xl:gap-5 items-center two">
                  <h1 className="text-5xl xl:text-7xl font-bulls font-extrabold uppercase text-slate-900 tracking-widest text-end">Match <span className="block text-sm xl:text-lg text-center">the year</span></h1>
                  <h1 className="text-7xl xl:text-9xl font-bulls font-extrabold uppercase text-yellow-600  text-end">OF</h1>
              </div>
              <div className="flex flex-row gap-2 items-center justify-between w-full xl:w-[90%] three">
                <h1 className="flex-1 text-xl xl:text-3xl font-bulls font-bold uppercase text-yellow-600 tracking-widest text-start">Los Angeles Lakers</h1>
                <h1 className="flex-1 text-5xl xl:text-9xl font-lakers font-extrabold uppercase text-slate-900 tracking-widest text-center">vs</h1>
                <h1 className="flex-1 text-xl xl:text-3xl font-bulls font-bold uppercase text-yellow-600 tracking-widest text-end">Boston Celtics</h1>
              </div>
            </div>

              <div className="flex flex-col items-end four">
                <p className="text-sm xl:text-lg font-bulls font-extrabold uppercase text-slate-900 tracking-widest"> NBA <span className="text-2xl xl:text-4xl text-slate-500 font-lakers tracking-widest">Final</span> Showdown</p>
                <p className="text-sm xl:text-lg font-bulls font-extrabold uppercase text-slate-900 tracking-widest">April 1st Saturday, 7:30 PM EST</p>
                <p className="text-xs xl:text-sm font-bulls font-extrabold uppercase text-slate-900 tracking-widest">Get Your Tickets Now!</p>
              </div>
          </div>
        </div>
        <div className="relative flex-1 bg-slate-400 flex items-center justify-around">
          <div className="w-4/5 five">
          <img src={imageBskt.tournament} alt="" className="w-[80%] xl:w-[90%] ml-16 xl:ml-10 object-cover"/>
          </div>
          <div className="w-1/5 h-fit my-auto xl:mt-64">
            <p className="absolute -rotate-90 top-20 xl:top-36 -right-5 xl:-right-10 text-2xl xl:text-5xl font-bruce font-extrabold uppercase text-slate-100 tracking-widest six">Glory</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tournament