const Cta = () => {
  return (
    <div className=" flex flex-col items-center space-y-6 divide-gray-200 rounded-[10px] bg-[#FFEFE4] py-8">
      <h3 className="text-center text-lg font-medium text-[#010101]">
        Would you like to
        <br /> post a job!
      </h3>
      <p className="text-center text-[10px] font-normal">
        get 50% offer every post made
        <br /> and discover new candidates
      </p>
      <div>
        <button className="flex h-[2.8125rem] w-[10.4375rem] items-center justify-center gap-2 rounded-[10px] bg-[#E86514] py-[4.87px] px-[7.88px] font-medium text-white">
          Get started
        </button>
      </div>
    </div>
  )
}

export default Cta
