import React from "react"
interface props {
  image: string
  title: string
}

const CreationCard: React.FC<props> = ({ image, title }) => {
  return (
    <div className={`h-36 mb-6 relative`}>
      <img className="absolute -z-10 w-full" src={image} alt="" />
      <h3 className="text-[1.6rem] font-thin w-[40%] mt-12 ml-5 leading-6 text-white">{title}</h3>
    </div>
  )
}

export default CreationCard
