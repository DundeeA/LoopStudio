import image from "../../assets/image-interactive.jpg"

function SubHero() {
  return (
    <section className="w-min-screen flex flex-col items-center pt-24">
      <img src={image} alt="" className="w-[87%]" />
      <div className=" w-[70%] text-center mt-10">
        <h1 className="text-[2.2rem] leading-9 text-black">THE LEADER IN INTERACTIVE VR</h1>

        <p className="text-[.9rem] leading-6 mt-5 font-Alata text-gray-600">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies
          around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their
          brand.
        </p>
      </div>
    </section>
  )
}

export default SubHero
