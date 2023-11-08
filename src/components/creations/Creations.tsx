import CreationCard from "./creation-card/CreationCard"

function Creations() {
  return (
    <div className="mt-20 pt-1 flex flex-col items-center w-full">
      <h2 className="text-center font-thin  text-[2.3rem] mb-10">OUR CREATIONS</h2>

      <div className=" grid grid-cols-1  md:grid-cols-4  md:w-[77.5vw]    w-[89vw] justify-center">
        <CreationCard styles="bg-smEarth md:bg-lgEarth" title="DEEP EARTH" />
        <CreationCard styles="bg-smArcade md:bg-lgArcade" title="NIGHT ARCADE" />
        <CreationCard styles="bg-smSoccer md:bg-lgSoccer" title="SOCCER TEAM VR" />
        <CreationCard styles="bg-smGrid md:bg-lgGrid" title="THE GRID" />

        <CreationCard styles="bg-smAbove md:bg-lgAbove" title="FROM UP ABOVE VR" />
        <CreationCard styles="bg-smCuriosity md:bg-lgCuriosity" title="THE CURIOSITY" />
        <CreationCard styles="bg-smPocket md:bg-lgPocket" title="POCKET BOREALIS" />
        <CreationCard styles="bg-smFisheye md:bg-lgFisheye" title="MAKE IT FISHEYE" />
      </div>

      <button className="border tracking-widest font-semibold border-black w-40 h-10 mt-2">SEE ALL</button>
    </div>
  )
}

export default Creations
