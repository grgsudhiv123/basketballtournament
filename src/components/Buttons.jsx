
const Buttons = ({name}) => {
  return (
    <button className="p-1 xl:p-3 border-2 border-coral-500 hover:text-slate-800 hover:bg-slate-200 text-xs xl:text-md uppercase font-bruce text-slate-200 ease-in-out duration-200 active:bg-transparent active:text-slate-300">
        {name}
    </button>
  )
}

export default Buttons