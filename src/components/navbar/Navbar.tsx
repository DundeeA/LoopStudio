function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center w-[100%]">
      <p className="font-Alata font-medium text-[1.75rem] md:text-[2.3rem]  2xl:text-[3.2rem]  text-white">loopstudios</p>

      <button className="w-6 h-4 mt-1 bg-hamburgericon bg-cover md:hidden"></button>

      <ul className="md:flex flex-row font-semibold text-[1rem] 2xl:text-[1.2rem] 2xl:gap-[3rem] gap-[1.75rem] mr-1 pt-3 text-white hidden">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
