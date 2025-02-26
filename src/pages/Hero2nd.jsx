
const Hero2nd = () => {
  return (
        <div className="absolute stickey m-0 w-screen h-screen transform flex flex-col gap-32 uppercase font-bruce xl:typing-effectxl z-20 bg-slate-500 bg-cover overflow-x-hidden">
            <div className=" flex-1 flex flex-col justify-end items-start w-fit translate-x-3 xl:translate-x-1/2">
                <h1 className="text-white text-sm xl:text-lg  border-yellow-400 fade">the ultimate</h1>
                <h1 className="text-yellow-400 text-6xl xl:text-9xl fade font-extrabold">kickoff</h1>
                <h1 className="text-white text-[10px] xl:text-xs  overflow-hidden whitespace-nowrap typing-effect typing-effect-xl">Transform Your Tomorrow, Today</h1>
            </div>

            <div className="flex-1 flex items-center text-white text-[10px] xl:text-xs overflow-hidden xl:whitespace-nowrap sm:fade xl:typing-effect-xl max-w-full xl:max-w-fit xl:mx-auto">
                <p className="flex flex-col xl:flex-row items-center w-full xl:max-w-fit">
                    <span>
                        {`The ball doesn't lie put in the work, `}
                    </span>
                    <span>
                        {`and the net will sing.`}
                    </span>
                </p>
            </div>
        </div>
  )
}

export default Hero2nd