import React from "react"
import ContactForm from "./form/ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ContactComponent = () => {
  return (
    <section className="kontakt" id="section3">
      <div className="container">
        <h2 data-aos="fade-up">KONTAKT</h2>
        <div className="row">
          <div className="col-lg-6 ml-auto">
            <div data-aos="fade-up" className="dane-kontaktowe">
              <p>
                <strong>e-mail:</strong> <br />
                bartosz.cp@gmail.com
              </p>
              <p>
                <strong>github:</strong> <br />
                <a
                  href="https://github.com/bartoszcpp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="socialIcon" icon={faGithub} />
                </a>
              </p>
              <p>
                <strong>linkedin:</strong> <br />
                <a
                  href="https://www.linkedin.com/in/bartosz-cpp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div data-aos="fade-down" className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent
