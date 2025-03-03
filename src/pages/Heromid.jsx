
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

const Hermoid =()=>{

  return<>
  
  <div className="relative w-full h-screen flex">
    <div className="w-1/2 flex items-center">
    <div className="relative bg-yellow-500 h-[80%] w-[90%] xl:w-[70%]">
      <div className="absolute top-10 xl:top-10 -right-32 font-bold text-[150px] xl:text-[300px] font-bulls text-yellow-400"><span  className="text-white">3</span>0</div>
    </div>
    </div>
    <div className="w-full xl:w-full bg-slate-500">
      <h1 className="font-lakers text-5xl xl:text-9xl font-extrabold text-slate-100 mt-10 xl:mt-20 ml-10 xl:ml-20">Our sponsers</h1>
    </div>
    <div className="absolute flex w-full h-full items-center">
      <div className="max-w-screen-xl mx-auto h-fit bg-slate-400">
        <SponsersSlider/>
      </div>
    </div>

  </div>
  
  
  
  </>
}

export default Hermoid


