import React, { useRef, useEffect } from "react"
// import WebDeveloper from "../assets/web--developer.svg?react"
import StandingMan from "../assets/standing-man.svg?react"
import ReplyMan from "../assets/reply-man.svg?react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const SvgFixed: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)
  const wrapper1 = useRef<HTMLDivElement>(null)
  // const wrapper2 = useRef<HTMLDivElement>(null)
  const wrapper3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapper1.current || !wrapper3.current) return

    const [element1] = wrapper1.current.children
    // const [element2] = wrapper2.current.children
    const [element3] = wrapper3.current.children

    const standingMan = (element1 as SVGElement).getElementById("standing-man")
    // const webDeveloper = (element2 as SVGElement).getElementById("web-developer")
    const replyMan = (element3 as SVGElement).getElementById("reply-man")

    if (!standingMan || !replyMan) return

    // gsap.set([standingMan, webDeveloper, replyMan], { autoAlpha: 0 })
    gsap.set([standingMan, replyMan], { autoAlpha: 0 })

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

    tl.fromTo(
      standingMan,
      { x: "-=300" },
      {
        duration: 1,
        x: "+=300",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: "#section1",
          start: "top 10%",
          end: "bottom 10%",
          onToggle: (self) =>
            gsap.fromTo(
              standingMan,
              { x: self.isActive ? "-=300" : "0" },
              {
                x: self.isActive ? "0" : "-=300",
                duration: 1,
                autoAlpha: self.isActive ? 1 : 0,
              }
            ),
        },
      }
    )
      // .fromTo(
      //   webDeveloper,
      //   { x: "-=300" },
      //   {
      //     duration: 1,
      //     x: "+=300",
      //     autoAlpha: 1,
      //     scrollTrigger: {
      //       trigger: "#section2",
      //       start: "top 10%",
      //       end: "bottom top",
      //       onToggle: self =>
      //         gsap.fromTo(
      //           webDeveloper,
      //           { x: self.isActive ? "-=300" : "0" },
      //           {
      //             x: self.isActive ? "0" : "-=300",
      //             duration: 1,
      //             autoAlpha: self.isActive ? 1 : 0,
      //           }
      //         ),
      //     },
      //   }
      // )
      .fromTo(
        replyMan,
        { x: "-=300" },
        {
          duration: 1,
          x: "+=300",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: "#section3",
            start: "top 20%",
            end: "bottom -50%",
            onToggle: (self2) =>
              gsap.fromTo(
                replyMan,
                { x: self2.isActive ? "-=300" : "0" },
                {
                  x: self2.isActive ? "0" : "-=300",
                  duration: 1,
                  autoAlpha: self2.isActive ? 1 : 0,
                }
              ),
          },
        }
      )
  }, [])
  return (
    <>
      <div ref={wrapper1} className="svg-fixed1">
        <StandingMan />
      </div>
      {/* <div ref={wrapper2} className="svg-fixed2">
        <WebDeveloper />
      </div> */}
      <div ref={wrapper3} className="svg-fixed3">
        <ReplyMan />
      </div>
    </>
  )
}

export default SvgFixed

