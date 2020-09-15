import React from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"

import "aos/dist/aos.css"

class Layout extends React.Component {
  componentDidMount() {
    AOS.init()
  }

  componentDidUpdate() {
    AOS.refresh()
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bartosz Ciąpała - Portfolio</title>
          <meta name="description" content="Bartosz Ciąpała - Portfolio" />
          <meta name="theme-color" content="#01a792" />
        </Helmet>
        <div>{this.props.children}</div>
      </>
    )
  }
}

export default Layout
