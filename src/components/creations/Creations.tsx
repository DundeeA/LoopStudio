import CreationCard from "./creation-card/CreationCard"

function Creations() {
  return (
    <section className="mt-20 md:mt-0 pt-1 flex flex-col items-center w-full">
      <div className="w-full md:flex md:justify-between md:items-center md:w-[77%]">
        <h2 className="text-center font-thin  text-[2.3rem] md:text-[3.2rem]">OUR CREATIONS</h2>
        <button aria-label="SEE ALL" className="border tracking-widest font-semibold border-black w-40 h-10 hidden md:inline">
          SEE ALL
        </button>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-4  md:mt-[4.4rem]  w-[89vw]  smd:w-[60vw] md:w-[80%] md:pl-6 justify-center">
        <CreationCard styles=" bg-smEarth md:bg-lgEarth" title="DEEP EARTH" />
        <CreationCard styles=" bg-smArcade md:bg-lgArcade" title="NIGHT ARCADE" />
        <CreationCard styles=" bg-smSoccer md:bg-lgSoccer" title="SOCCER TEAM VR" />
        <CreationCard styles=" bg-smGrid md:bg-lgGrid" title="THE GRID" />

        <CreationCard styles=" bg-smAbove md:bg-lgAbove" title="FROM UP ABOVE VR" />
        <CreationCard styles=" bg-smPocket md:bg-lgPocket" title="POCKET BOREALIS" />
        <CreationCard styles=" bg-smCuriosity md:bg-lgCuriosity" title="THE CURIOSITY" />
        <CreationCard styles=" bg-smFisheye md:bg-lgFisheye" title="MAKE IT FISHEYE" />
      </div>

      <button aria-label="SEE ALL" className="border tracking-widest font-semibold border-black w-40 h-10 mt-2 md:hidden">
        SEE ALL
      </button>
    </section>
  )
}

export default Creations
