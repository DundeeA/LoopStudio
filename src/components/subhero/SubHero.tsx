import image from "/image-interactive.jpg"

function SubHero() {
  return (
    <section className="w-min-screen flex flex-col items-center justify-center ">
      <div className="w-[20rem] lg:w-[70rem] md:w-[50rem] relative md:h-[51.5rem] smd:w-[70%]">
        <img src={image} alt="" className="relative  lg:w-[46rem] md:mt-40 md:w-[35rem]  mt-24  w-[20.5rem] smd:w-full" />

        <div
          className="w-[100%] md:w-[77vw] text-center  md:text-left relative lg:left-[36rem] lg:bottom-[20rem] md:pt-[5.5rem] md:pl-[5.5rem] bg-white
         md:left-[18rem] md:bottom-[11rem]   md:block  flex flex-col items-center">
          <h1 className=" text-black w-[20rem] mt-10  tracking-[.2rem] leading-[2.4rem]  text-[1.8rem]   md:tracking-[.11rem] md:leading-[3.3rem] smd:text-[2.2rem] md:text-[2.8rem] md:w-[22rem]">
            THE LEADER IN INTERACTIVE VR
          </h1>

          <p className="text-[.9rem]  leading-6 mt-5 font-Alata text-gray-600 lg:mt-8 w-[17rem] lg:w-[27rem] md:w-[25rem]    smd:text-[1.3rem]    smd:w-[100%]">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies
            around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to
            their brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SubHero
