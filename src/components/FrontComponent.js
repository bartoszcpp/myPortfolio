import React from "react"
import Title from "./Title"
import InfoText from "./InfoText"
import { Icon } from "@iconify/react"
import bxlReact from "@iconify/icons-bx/bxl-react"
import gatsbyIcon from "@iconify/icons-cib/gatsby"
import nextjsIcon from "@iconify/icons-logos/nextjs"
import graphqlIcon from "@iconify/icons-cib/graphql"
import htmlFive from "@iconify/icons-icomoon-free/html-five"
import bxlCss3 from "@iconify/icons-bx/bxl-css3"
import sassAlt from "@iconify/icons-cib/sass-alt"
import javascriptIcon from "@iconify/icons-cib/javascript"

const FrontComponent = () => {
  return (
    <>
      <section className="front-section" id="section1">
        <div className="container">
          <div className="row">
            <Title />
            <InfoText />
          </div>
          <div data-aos="fade-down" className="icons">
            <Icon icon={bxlReact} />
            <Icon icon={gatsbyIcon} />
            <Icon icon={nextjsIcon} />
            <Icon icon={graphqlIcon} />
            <Icon icon={javascriptIcon} />
            <Icon icon={htmlFive} />
            <Icon icon={bxlCss3} />
            <Icon icon={sassAlt} />
          </div>
        </div>
      </section>
    </>
  )
}

export default FrontComponent
