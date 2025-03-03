
const SponsersCards = ({name, img, position, team}) => {
  return (
    <div className="flex flex-col rounded-lg p-4">
        <div className="w-[90%] xl:w-full h-2/3 mx-auto cursor-pointer bg-cyan-700 hover:bg-cyan-900 duration-300 ease-in-out overflow-hidden">
          <div className="w-full h-96 overflow-hidden">
            <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover shadow-md scale-125 hover:scale-100 duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col p-2">
            <h1 className="text-2xl font-extrabold font-bulls tracking-widest text-gray-200">{name}</h1>
            <h2 className="text-gray-200 font-palanquin text-sm tracking-widest uppercase font-bold">{position}</h2>
          </div>
        </div>
    </div>
  )
}

export default SponsersCards