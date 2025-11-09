import React, { useEffect, ReactNode } from "react"
import { Helmet } from "react-helmet-async"
import AOS from "aos"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bartosz Ciąpała - Portfolio</title>
        <meta name="description" content="Bartosz Ciąpała - Portfolio" />
        <meta name="theme-color" content="#01a792" />
      </Helmet>
      <div>{children}</div>
    </>
  )
}

export default Layout

