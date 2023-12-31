interface props {
  styles: string
  title: string
}

const CreationCard: React.FC<props> = ({ styles, title }) => {
  return (
    <div
      className={
        `relative bg-no-repeat bg-cover  mb-6 h-[7.5rem] md:h-auto md:w-[90%] md:aspect-[0.57/1] md:mb-9 transition-all ease-in-out duration-600 cursor-pointer hover:scale-95 hover:opacity-70` +
        styles
      }>
      <h3
        className={
          "text-[1.6rem] md:text-[1.3rem] lg:text-[1.4rem]  2xl:text-[2.1rem] 2xl:leading-10 md:top-[50%] font-thin w-[40%] mt-12 ml-5 leading-6 text-white md:relative lg:top-[70%]"
        }>
        {title}
      </h3>
    </div>
  )
}

export default CreationCard
