import CreationCard from "./creation-card/CreationCard"

function Creations() {
  return (
    <div className="mt-20 pt-1 flex flex-col items-center justify-center">
      <h2 className="text-center font-thin  text-[2.3rem] mb-10">OUR CREATIONS</h2>

      <CreationCard image="/image-deep-earth.jpg" title="DEEP EARTH" />

      <CreationCard image="/image-night-arcade.jpg" title="NIGHT ARCADE" />

      <CreationCard image="/image-soccer-team.jpg" title="SOCCER TEAM VR" />

      <CreationCard image="/image-grid.jpg" title="THE GRID" />

      <CreationCard image="/image-from-above.jpg" title="FROM UP ABOVE VR" />

      <CreationCard image="/image-pocket-borealis.jpg" title="POCKET BOREALIS" />

      <CreationCard image="/image-curiosity.jpg" title="THE CURIOSITY" />

      <CreationCard image="/image-fisheye.jpg" title="MAKE IT FISHEYE" />
    </div>
  )
}

export default Creations
