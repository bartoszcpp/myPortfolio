import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@iconify/react"
import bxlReact from "@iconify/icons-bx/bxl-react"
import gatsbyIcon from "@iconify/icons-cib/gatsby"
import nextjsIcon from "@iconify/icons-logos/nextjs"
import bxlWordpress from "@iconify/icons-bx/bxl-wordpress"
import woocommerceIcon from "@iconify/icons-logos/woocommerce"
import bootstrapIcon from "@iconify/icons-cib/bootstrap"
import htmlFive from "@iconify/icons-icomoon-free/html-five"
import phpIcon from "@iconify/icons-cib/php"
import graphqlIcon from "@iconify/icons-cib/graphql"
import Image from "./Image"

const ProjectComponent = () => {
  return (
    <section className="projekt" id="section2">
      <div className="container">
        <h2 className="subtitleH2" data-aos="fade-down">
          PROJEKTY
        </h2>
        <div className="row">
          <div data-aos="fade-up" className="col-md-6 order-md-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kmfurniture.netlify.app/"
            >
              <Image alt="kmfurniture" filename="kmfurniture.jpg" />
            </a>
          </div>
          <div data-aos="fade-up" className="col-md-6 order-md-2 opis-projekt">
            <h3>KMFurniture.pl</h3>
            <p>Technologie:</p>
            <div className="svgIcons">
              <Icon icon={bxlReact} />
              <Icon icon={gatsbyIcon} />
              <Icon icon={bxlWordpress} />
              <Icon icon={bootstrapIcon} />
            </div>{" "}
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bartoszcpp/kmfurniture"
            >
              Github
            </a>
          </div>
          {/* another row */}

          <div data-aos="fade-up" className="col-md-6 order-md-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://skleponline-pl-git-skleponline.bartoszcpp.vercel.app/"
            >
              <Image alt="sklepOnline" filename="sklepOnline.jpg" />
            </a>
          </div>

          <div
            data-aos="fade-down"
            className="col-md-6 order-md-3 opis-projekt text-md-right"
          >
            <h3>sklepOnline.pl</h3>
            <p>Technologie:</p>
            <div className="svgIconsRight">
              <Icon icon={bxlReact} />
              <Icon icon={nextjsIcon} />
              <Icon icon={graphqlIcon} />
              <Icon icon={bxlWordpress} />
              <Icon icon={woocommerceIcon} />
              <Icon icon={bootstrapIcon} />
            </div>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bartoszcpp/skleponline.pl/tree/skleponline"
            >
              Github
            </a>
          </div>
          {/* another row */}
          <div data-aos="fade-down" className="col-md-6 order-md-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://library-star-wars.vercel.app/"
            >
              <Image alt="star-wars" filename="star-wars.png" />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="col-md-6 order-md-6 opis-projekt"
          >
            <h3>Star wars Library</h3>
            <p>Technologie:</p>
            <div className="svgIcons">
              <Icon icon={bxlReact} />
              <Icon icon={nextjsIcon} />
              <Icon icon={bootstrapIcon} />
            </div>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bartoszcpp/libraryStarWars"
            >
              Github
            </a>
          </div>
          {/* another row */}
          <div data-aos="fade-down" className="col-md-6 order-md-8">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.lg-tech.com.pl/"
            >
              <Image alt="lg-tech" filename="lg-tech.jpg" />
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="col-md-6 order-md-7 opis-projekt text-md-right"
          >
            <h3>LG-tech.com.pl</h3>
            <p>Technologie:</p>
            <div className="svgIcons">
              <Icon icon={bxlWordpress} />
              <Icon icon={phpIcon} />
              <Icon icon={htmlFive} />
              <Icon icon={bootstrapIcon} />
            </div>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bartoszcpp/LG-tech"
            >
              Github
            </a>
          </div>
        </div>
        {/* Projekty komercyjne */}
        <h3 className="subtitleH3">Projekty komercyjne</h3>
        <div className="row">
          <div data-aos="fade-up" className="col-md-6 order-md-8">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://xenodochial-villani-918858.netlify.app/"
            >
              <Image alt="frankowicze" filename="frankowicze.jpg" />
            </a>
          </div>
          <div data-aos="fade-up" className="col-md-6 order-md-7 opis-projekt">
            <h3>Frankowicze</h3>
            <p>Technologie:</p>
            <div className="svgIcons">
              <Icon icon={bxlReact} />
              <Icon icon={gatsbyIcon} />
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </div>{" "}
          </div>

          {/* another row */}
          <div data-aos="fade-up" className="col-md-6 order-md-9">
            <a target="_blank" rel="noreferrer" href="http://new.transwise.pl/">
              <Image alt="transwise" filename="transwise.jpg" />
            </a>
          </div>
          <div data-aos="fade-up" className="col-md-6 order-md-10 opis-projekt">
            <h3>Transwise</h3>
            <p>Technologie:</p>
            <div className="svgIcons">
              <Icon icon={bxlReact} />
              <Icon icon={gatsbyIcon} />
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </div>{" "}
          </div>

          {/* another row */}
        </div>
      </div>
    </section>
  )
}

export default ProjectComponent
