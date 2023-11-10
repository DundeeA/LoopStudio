function Footer() {
  const socialLinks = [
    { image: "/icons/icon-facebook.svg", link: "https://twitter.com/dundeedev", label: "facebook" },
    { image: "/icons/icon-twitter.svg", link: "https://twitter.com/dundeedev", label: "twitter" },
    { image: "/icons/icon-pinterest.svg", link: "https://twitter.com/dundeedev", label: "pinterest" },
    { image: "/icons/icon-instagram.svg", link: "https://twitter.com/dundeedev", label: "instagram" },
  ]

  const navLinks = [
    { text: "About", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Events", link: "#" },
    { text: "Products", link: "#" },
    { text: "Support", link: "#" },
  ]

  return (
    <footer className="min-w-screen bg-black mt-[14.5vh] pt-11 pb-14 flex flex-col items-center  md:flex-row md:justify-between md:pb-5 md:pt-0 md:mt-[9.4rem] ">
      <div className="md:ml-[1rem]  lg:ml-[10rem] md:mt-5">
        <p className="font-Alata font-medium text-[1.75rem] text-white md:mt-3">loopstudios</p>

        <ul className="mt-7 text-center md:flex md:gap-[1.96rem] md:mt-5 mb-4 relative text-white">
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
      </div>

      <div className="flex flex-col items-center md:items-end   md:mr-[2rem]  lg:mr-[10.3rem]">
        <ul className="flex flex-row space-x-4 mt-9 md:mt-5 items-center">
          {socialLinks.map((link) => (
            <li key={link.label} className="relative">
              {" "}
              <a
                href={link.link}
                aria-label={link.label}
                className="after:absolute after:content-['']  after:scale-x-0 hover:after:scale-x-100  after:w-[60%] after:h-[2px] after:bg-white after:top-8 after:left-[20%]
               after:transition-all after:ease-in-out after:duration-300 after:transform after:origin-center">
                <img src={link.image} alt={link.label} className="w-50  h-50" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-white text-[0.96rem] mt-4 md:mt-6">© 2023 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
