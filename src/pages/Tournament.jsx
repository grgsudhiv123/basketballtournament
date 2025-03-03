import {imageBskt} from "../Constants/Constants"


const Tournament = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col xl:flex-row">
        <div className="flex-1 h-full">
          <div className="h-full mx-10 flex flex-col justify-center items-end uppercase gap-10 xl:gap-16">
            <h1 className="text-lg xl:text-2xl font-bulls font-bold uppercase text-slate-900 tracking-widest">- The Battle of Glory</h1>

            <div className="flex flex-col items-end gap-0">
              <div className="flex flex-row gap-1 xl:gap-5 items-center ">
                  <h1 className="text-5xl xl:text-7xl font-bulls font-extrabold uppercase text-slate-900 tracking-widest text-end">Match <span className="block text-sm xl:text-lg text-center">the year</span></h1>
                  <h1 className="text-7xl xl:text-9xl font-bulls font-extrabold uppercase text-yellow-600  text-end">OF</h1>
              </div>
              <div className="flex flex-row gap-2 items-center justify-between w-full xl:w-[90%]">
                <h1 className="flex-1 text-xl xl:text-3xl font-bulls font-bold uppercase text-yellow-600 tracking-widest text-start">Los Angeles Lakers</h1>
                <h1 className="flex-1 text-5xl xl:text-9xl font-lakers font-extrabold uppercase text-slate-900 tracking-widest text-center">vs</h1>
                <h1 className="flex-1 text-xl xl:text-3xl font-bulls font-bold uppercase text-yellow-600 tracking-widest text-end">Boston Celtics</h1>
              </div>
            </div>

              <div className="flex flex-col items-end">
                <p className="text-sm xl:text-lg font-bulls font-extrabold uppercase text-slate-900 tracking-widest"> NBA <span className="text-2xl xl:text-4xl text-slate-500 font-lakers tracking-widest">Final</span> Showdown</p>
                <p className="text-sm xl:text-lg font-bulls font-extrabold uppercase text-slate-900 tracking-widest">April 1st Saturday, 7:30 PM EST</p>
                <p className="text-xs xl:text-sm font-bulls font-extrabold uppercase text-slate-900 tracking-widest">Get Your Tickets Now!</p>
              </div>
          </div>
        </div>
        <div className="relative flex-1 bg-slate-400 flex items-center justify-around">
          <div className="w-4/5">
          <img src={imageBskt.tournament} alt="" className="p-5 ml-10 top-0 xl:top-10 w-3/4 xl:w-4/5 absolute object-cover"/>
          </div>
          <div className="w-1/5 h-fit my-auto xl:mt-64">
            <p className="absolute -rotate-90 top-20 xl:top-36 -right-5 xl:-right-10 text-2xl xl:text-5xl font-bruce font-extrabold uppercase text-slate-100 tracking-widest">Glory</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tournament