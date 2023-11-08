interface props {
  styles: string
  title: string
}

const CreationCard: React.FC<props> = ({ styles, title }) => {
  return (
    <div className={`h-36 md:h-[30rem] mb-6 relative bg-no-repeat bg-cover ` + styles}>
      <h3 className={"text-[1.6rem] font-thin w-[40%] mt-12 ml-5 leading-6 text-white"}>{title}</h3>
    </div>
  )
}

export default CreationCard
