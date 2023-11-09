import { useState } from "react"
import MobileNav from "./mobileNav"
function NavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav className="flex flex-row justify-between items-center w-[100%]">
      <p className="font-Alata font-medium text-[1.75rem] md:text-[2.3rem]  2xl:text-[3.2rem] z-10  text-white">loopstudios</p>

      <button
        onClick={toggleNav}
        aria-label="open mobile navigation"
        className="w-6 h-4 mt-1 bg-hamburgericon bg-cover md:hidden z-10"></button>

      <ul className="md:flex flex-row font-semibold text-[1rem] 2xl:text-[1.2rem] 2xl:gap-[3rem] gap-[1.75rem] mr-1 pt-3 text-white hidden">
        <li>
          <a href="#" aria-label="About loop studio">
            About
          </a>
        </li>
        <li>
          <a href="#" aria-label="Careers at loop studio">
            Careers
          </a>
        </li>
        <li>
          <a href="#" aria-label="See events">
            Events
          </a>
        </li>
        <li>
          <a href="#" aria-label="See products">
            Products
          </a>
        </li>
        <li>
          <a href="#" aria-label="get support">
            Support
          </a>
        </li>
      </ul>

      {navOpen && <MobileNav />}
    </nav>
  )
}

export default NavBar
