import { useState } from "react"
import MobileNav from "./mobileNav"
function NavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = () => setNavOpen(!navOpen)

  const navLinks = [
    { text: "About", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Events", link: "#" },
    { text: "Products", link: "#" },
    { text: "Support", link: "#" },
  ]

  return (
    <nav
      className="flex flex-row justify-between items-center w-[100%]  
      animate-fade-down animate-duration-[600ms] animate-delay-0 animate-ease-in
    ">
      <p className="font-Alata font-medium text-[1.75rem] md:text-[2.3rem]  2xl:text-[3.2rem] z-10  text-white">loopstudios</p>

      <button
        onClick={toggleNav}
        aria-label="open mobile navigation"
        className="w-6 h-4 mt-1 bg-hamburgericon bg-cover md:hidden z-10"></button>

      <ul className="md:flex flex-row font-semibold text-[1rem] 2xl:text-[1.2rem] 2xl:gap-[3rem] gap-[1.75rem] mr-1 pt-3 text-white hidden">
        {navLinks.map((link) => (
          <li key={link.link} className="relative">
            {" "}
            <a
              href={link.link}
              aria-label={link.text}
              className=" after:absolute after:content-['']  after:scale-x-0 hover:after:scale-x-100  after:w-[60%] after:h-[2px] after:bg-white after:top-8 after:left-[20%]
               after:transition-all after:ease-in-out after:duration-300 after:transform after:origin-center">
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {navOpen && <MobileNav />}
    </nav>
  )
}

export default NavBar
