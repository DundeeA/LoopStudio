function Footer() {
  return (
    <footer className="min-w-screen bg-black mt-[14.5vh] pt-11 pb-14 flex flex-col items-center  md:flex-row md:justify-between md:pb-5 md:pt-0 md:mt-[9.4rem] ">
      <div className="md:ml-[1rem]  lg:ml-[10rem] md:mt-5">
        <p className="font-Alata font-medium text-[1.75rem] text-white md:mt-3">loopstudios</p>

        <ul className="mt-7 text-center md:flex md:gap-[1.96rem] md:mt-5">
          <li className="mb-4">
            <a href="#" aria-label="About loop studio" className="text-white">
              About
            </a>
          </li>

          <li className="mb-4">
            <a href="#" aria-label="See careers" className="text-white">
              Careers
            </a>
          </li>

          <li className="mb-4">
            <a href="#" aria-label="See events" className="text-white">
              Events
            </a>
          </li>

          <li className="mb-4">
            <a href="#" aria-label="see products" className="text-white">
              Products
            </a>
          </li>

          <li className="mb-4">
            <a href="#" aria-label="get support" className="text-white">
              Support
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-end   md:mr-[2rem]  lg:mr-[10.3rem]">
        <ul className="flex flex-row space-x-4 mt-9 md:mt-5">
          <li>
            <a href="#" aria-label="facebook link">
              <img src="/icons/icon-facebook.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#" aria-label="twitter link">
              <img src="/icons/icon-twitter.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#" aria-label="pinterest link">
              <img src="/icons/icon-pinterest.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#" aria-label="instagram link">
              <img src="/icons/icon-instagram.svg" alt="" />
            </a>
          </li>
        </ul>

        <p className="text-white text-[0.96rem] mt-4 md:mt-6">© 2023 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
