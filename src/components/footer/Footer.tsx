function Footer() {
  return (
    <footer className="min-w-screen bg-black h-[70vh] mt-[14.5vh] pt-11 flex flex-col items-center ">
      <p className="font-Alata font-medium text-[1.75rem] text-white">loopstudios</p>

      <ul className="mt-7 text-center">
        <li className="mb-4">
          <a href="#" className="text-white">
            About
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="text-white">
            Careers
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="text-white">
            Events
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="text-white">
            Products
          </a>
        </li>

        <li className="mb-4">
          <a href="#" className="text-white">
            Support
          </a>
        </li>
      </ul>

      <ul className="flex flex-row space-x-4 mt-9">
        <li>
          <a href="#">
            <img src="/icons/icon-facebook.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="/icons/icon-twitter.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="/icons/icon-pinterest.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="/icons/icon-instagram.svg" alt="" />
          </a>
        </li>
      </ul>

      <p className="text-gray-600 text-[0.96rem] mt-4">© 2023 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer
