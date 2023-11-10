import { useLockBodyScroll } from "@uidotdev/usehooks"

function MobileNav() {
  useLockBodyScroll()
  const navLinks = [
    { text: "About", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Events", link: "#" },
    { text: "Products", link: "#" },
    { text: "Support", link: "#" },
  ]

  return (
    <div className="w-screen h-screen bg-black z-4  left-[0] top-[0] absolute z-3">
      <ul className="flex gap-[1.03rem] flex-col text-[1.4rem]  text-white tracking-[.15rem] mt-[56%] smd:mt-[25%] smd:pl-10 pl-6">
        {navLinks.map((link, index) => (
          <li key={link.link + index} className={`relative animate-fade-right animate-duration-[1000ms]`}>
            {" "}
            <a href={link.link} aria-label={link.text}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
