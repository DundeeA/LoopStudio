import { useLockBodyScroll } from "@uidotdev/usehooks"

function MobileNav() {
  useLockBodyScroll()
  return (
    <div className="w-screen h-screen bg-black z-3  left-0 top-0 absolute">
      <ul className="text-whit flex gap-[1.03rem] flex-col text-[1.4rem]  text-white tracking-[.15rem] mt-[56%] pl-6">
        <li>
          <a href="#" aria-label="About loop studio">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" aria-label="Careers at loop studio">
            CAREERS
          </a>
        </li>
        <li>
          <a href="#" aria-label="See events">
            EVENTS
          </a>
        </li>
        <li>
          <a href="#" aria-label="See products">
            PRODUCTS
          </a>
        </li>
        <li>
          <a href="#" aria-label="get support">
            SUPPORT
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
