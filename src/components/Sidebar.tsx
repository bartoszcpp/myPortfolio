import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"

const Sidebar: React.FC = () => {
  const [scrollDir, setScrollDir] = useState<"scrolling down" | "scrolling up">("scrolling down")
  const [styleActive, setStyleActive] = useState<"scroll-down" | "scroll-up">("scroll-down")

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = (): void => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up")
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (scrollDir === "scrolling down") {
      setStyleActive("scroll-down")
    } else {
      setStyleActive("scroll-up")
    }
  }, [scrollDir])

  return (
    <>
      <div className="sidebar-container fixed">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span>Home</span>
          <div className={"sidebar1-3 " + styleActive}></div>
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span>Projekty</span>
          <div className={"sidebar2-3 " + styleActive}></div>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span>Kontakt</span>
          <div className={"sidebar3-3 " + styleActive}></div>
        </Link>
      </div>
      <div className="distanceSidebar"></div>
    </>
  )
}

export default Sidebar

