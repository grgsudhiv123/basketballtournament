import Hero2nd from "./pages/Hero2nd"

import FillupForms from "./pages/FillupForms"
import Tournament from "./pages/Tournament"
import Herofront from "./pages/Herofront"
import Heromid from "./pages/Heromid"
import Footer from "./pages/Footer"
import Navbar from "./components/Navbar"
import Stats from "./pages/Stats"

function App() {

  return (
    <>
     <section className="w-screen h-auto m-0 top-0 bottom-0 overflow-hidden">
      <section>
        <Navbar />
      </section>
        <section >
          <Herofront />
        </section>
          <section id="Aboutus" className="">
            <Hero2nd />
          </section>
          <section className="">
            <Heromid />
          </section>
          <section className="">
            <Tournament />
          </section>
          <section>
            <Stats />
          </section>
          {/* <section className="bg-slate-500">
            <FillupForms />
          </section> */}
          <section className="bg-slate-500">
            <Footer />
          </section>
     </section>
    </>
  )
}

export default App
