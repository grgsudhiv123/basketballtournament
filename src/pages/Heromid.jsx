
// const Heromid = () => {
//   return (
//     <>
//       <div className="relative w-full h-screen flex flex-row justify-between">
//         <div className="w-[20%] h-[60%] bg-yellow-400">
//         </div>
//         <div className="w-[60%] h-screen bg-slate-500 mt-20">
//         </div>
//         <div className="absolute top-0 left-[110px] flex flex-row ">
//             <h1 className="text-[400px] font-bulls font-extrabold text-white ">2</h1>
//             <h1 className="text-[400px] font-bulls font-extrabold text-yellow-400">0</h1>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Heromid



import SponsersSlider from "../components/SponsersSlider"
import { useEffect } from "react"
import gsap from "gsap"

import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Hermoid =()=>{
  useEffect(()=> {
    gsap.fromTo(
      ".header",{
        opacity:0,
        x:200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger:{
          trigger:".header",
          start:"top 80%",
          end:"top 50%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".number",{
        opacity:0,
        x:-200
      }, {
        x: 0, 
        opacity: 1, 
        duration: 3, 
        ease: "power3.out",
        scrollTrigger:{
          trigger:".number",
          start:"top 80%",
          end:"top 50%",
          scrub:2,
          once:true,
        }   
      }
    )

    gsap.fromTo(
      ".slidebar",{
        opacity:0,
        y:100
      }, {
        y: 0, 
        opacity: 1, 
        duration: 3, 
        ease: "power2.out",
        scrollTrigger:{
          trigger:".slidebar",
          start:"top 80%",
          end:"top 80%",
          scrub:2,
          once:true,
        }   
      }
    )
  },[])
  return<>
  
  <div className="relative w-full h-[800px]  xl:h-[1000px] flex my-10">
    <div className="w-1/2 flex items-center h-full">
    <div className="relative bg-yellow-500 h-[80%] w-[90%] xl:w-[60%]">
      <div className="absolute top-0 xl:top-0 -right-24 font-bold text-[120px] xl:text-[250px] font-bulls text-yellow-400 z-10 number"><span  className="text-white">3</span>0</div>
    </div>
    </div>
    <div className="w-full xl:w-full bg-slate-800">
      <h1 className=" font-lakers text-5xl xl:text-9xl font-extrabold text-slate-100 mt-10 xl:mt-10 ml-10 xl:ml-10 header">Our Players</h1>
    </div>
    <div className="absolute w-full h-full z-20 m-0">
      <div className="relative w-full h-full">
        <div className=" max-w-screen-lg mx-auto h-full flex items-start mt-64 xl:mt-80 slidebar">
          <SponsersSlider/>
        </div>
      </div>
    </div>

  </div>
  
  
  
  </>
}

export default Hermoid


