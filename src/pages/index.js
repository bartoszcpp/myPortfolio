import React from "react"
import Sidebar from "../components/Sidebar"
import FrontComponent from "../components/FrontComponent"
import SvgFixed from "../components/SvgFixed"
import ProjectComponent from "../components/ProjectComponent"
import Footer from "../components/Footer"
import ContactComponent from "../components/ContactComponent"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="box">
          <div className="wave -one"></div>
        </div>

        <main>
          <FrontComponent />
          <ProjectComponent />
          <ContactComponent />
          <SvgFixed />
        </main>

        <Sidebar />

        <footer>
          <Footer />
        </footer>
      </Layout>
    </>
  )
}

export default IndexPage
