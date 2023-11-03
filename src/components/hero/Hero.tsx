import NavBar from "../navbar/Navbar"

function Hero() {
  return (
    <section className="min-h-[97.5vh] bg-cover bg-heroimage pt-7 min-w-full  flex flex-col items-center ">
      <NavBar />

      <div className="border-2 border-red border-solid mt-[11.5vh] w-[88%] h-[30vh]  grid items-center">
        <h1 className="font-Josefin font-medium text-4xl text-white tracking-wider pl-6 pt-2 w-1">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </section>
  )
}

export default Hero
