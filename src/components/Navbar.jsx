import Buttons from "./Buttons"
const Navbar = () => {
  return (
    <div className="bg-[#648899] w-screen">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between p-6 items-center">
            <h1>Logo</h1>
            <div className="flex flex-row gap-20 uppercase font-bruce text-sm">
                <a href="#" className="text-slate-200 hover:text-slate-400 ease-in-out duration-200 active:text-slate-300">Home</a>
                <a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">About Us</a>
                <a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Saonsers</a>
                <a href="#" className="text-slate-600 hover:text-slate-200 ease-in-out duration-200 active:text-slate-400">Contact</a>
            </div>
            <Buttons name="Register"/>
        </div>
    </div>
  )
}

export default Navbar