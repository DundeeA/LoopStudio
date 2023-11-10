import { useState } from "react"
import NavBar from "../navbar/Navbar"
import MobileNav from "../navbar/mobileNav"

function Hero() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const toggleNav = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <header className="h-[97.5vh] bg-cover bg-heroimage pt-7 flex flex-col items-center md:h-[80vh] md:bg-largeheroimage md:pt-11 z-1">
      <div className=" w-[87.5vw] lg:w-[77.5vw] md:block flex flex-col items-center">
        {mobileNavOpen && <MobileNav />}
        <NavBar toggleNav={toggleNav} />

        {!mobileNavOpen && (
          <h1
            className="font-Josefin font-medium text-4xl block max-w-fit text-white tracking-wider border-2 border-white border-solid  pt-7 pb-3  pl-6 pr-9 mt-[9.5rem]
               md:text-[3.3rem] md:leading-[3.4rem] lg:pt-11 lg:mt-[7.7rem] lg:text-[4.25rem] lg:leading-[4.3rem] lg:pb-8 lg:pl-10  lg:mr-0 md:pr-24 2xl:text-[5.5rem]  2xl:leading-[6rem]
               smd:text-[3.5rem] smd:leading-[3rem]
              animate-fade-right animate-duration-[600ms] animate-delay-0 animate-ease-in
        ">
            <span>IMMERSIVE</span> <span className="block">EXPERIENCES</span> <span className="block lg:inline"> THAT</span>{" "}
            <span>DELIVER</span>
          </h1>
        )}
      </div>
    </header>
  )
}

export default Hero
