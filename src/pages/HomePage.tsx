import React from "react"
import Sidebar from "../components/Sidebar"
import FrontComponent from "../components/FrontComponent"
import SvgFixed from "../components/SvgFixed"
import Footer from "../components/Footer"
import ContactComponent from "../components/ContactComponent"

const HomePage: React.FC = () => {
  return (
    <>
      <div className="box">
        <div className="wave -one"></div>
      </div>

      <main>
        <FrontComponent />
        <ContactComponent />
        <SvgFixed />
      </main>

      <Sidebar />

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomePage
