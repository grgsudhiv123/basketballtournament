import Hero2nd from "./pages/Hero2nd"

import FillupForms from "./pages/FillupForms"
import Sponsers from "./pages/Sponsers"
import Herofront from "./pages/Herofront"
import Heromid from "./pages/Heromid"
import Footer from "./pages/Footer"


function App() {

  return (
    <>
     <section className="w-screen h-screen overflow-x-hidden overflow-y-auto m-0 top-0 bottom-0 bg-black">
        <section>
          <Herofront />
        </section>
        <section className="max-w-screen overflow-hidden">
          <Hero2nd />
        </section>
        {/* <section>
          <Heromid />
        </section>
        <section>
          <Sponsers />
        </section>
        <section>
          <FillupForms />
        </section>
        <section>
          <Footer />
        </section> */}
     </section>
    </>
  )
}

export default App
