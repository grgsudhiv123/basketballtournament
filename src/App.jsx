import Hero2nd from "./pages/Hero2nd"

import FillupForms from "./pages/FillupForms"
import Sponsers from "./pages/Sponsers"
import Herofront from "./pages/Herofront"
import Heromid from "./pages/Heromid"
import Footer from "./pages/Footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
     <section className="w-screen h-auto m-0 top-0 bottom-0">
      <section>
        <Navbar />
      </section>
        <section >
          <Herofront />
        </section>
        <section className=" max-w-screen overflow-hidden bg-cover overflow-x-hidden bg-transparent">
          <section className="">
            <Hero2nd />
          </section>
          <section className="bg-slate-500">
            <Heromid />
          </section>
          <section className="bg-slate-500">
            <Sponsers />
          </section>
          <section className="bg-slate-500">
            <FillupForms />
          </section>
          <section className="bg-slate-500">
            <Footer />
          </section>
        </section>
     </section>
    </>
  )
}

export default App
