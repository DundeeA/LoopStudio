import CreationCard from "./creation-card/CreationCard"

function Creations() {
  return (
    <div className="mt-20 pt-1 flex flex-col items-center w-full">
      <h2 className="text-center font-thin  text-[2.3rem] mb-10">OUR CREATIONS</h2>

      <div className=" grid grid-cols-1  md:grid-cols-4       w-[89vw] justify-center">
        <CreationCard image="/image-deep-earth.jpg" title="DEEP EARTH" />

        <CreationCard image="/image-night-arcade.jpg" title="NIGHT ARCADE" />

        <CreationCard image="/image-soccer-team.jpg" title="SOCCER TEAM VR" />

        <CreationCard image="/image-grid.jpg" title="THE GRID" />

        <CreationCard image="/image-from-above.jpg" title="FROM UP ABOVE VR" />

        <CreationCard image="/image-pocket-borealis.jpg" title="POCKET BOREALIS" />

        <CreationCard image="/image-curiosity.jpg" title="THE CURIOSITY" />

        <CreationCard image="/image-fisheye.jpg" title="MAKE IT FISHEYE" />
      </div>

      <button className="border tracking-widest font-semibold border-black w-40 h-10 mt-2">SEE ALL</button>
    </div>
  )
}

export default Creations
