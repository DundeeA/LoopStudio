import React from "react"
interface props {
  image: string
  title: string
}

const CreationCard: React.FC<props> = ({ image, title }) => {
  return (
    <div className={`w-[87vw] h-[18vh] mb-6 relative`}>
      <img className="absolute -z-10" src={image} alt="" />
      <h3 className="text-[1.6rem] font-thin w-[32vw] mt-12 ml-5 leading-6 text-white">{title}</h3>
    </div>
  )
}

export default CreationCard
