import HeroButton from "../Components/HeroButton";
import TextBox from "../Components/TextBox";
import hero from "../assets/Images/hero-illustration.svg"



const HomePage = () => {
  return (
    <>
      <div className="h-[780px] w-full xl:w-[1275px] flex items-center justify-between gap-5">

        <div className="w-[520px] md:min-w-[480px] h-fit flex flex-col gap-4">

          <TextBox
            texts="New: 1% Transaction Fee Model"
          />

          <h2 className="text-5xl text-[#0a0a0a] font-bold leading-15 mb-2">
            Smart Invoicing for Africa's <span className="text-[#285cb4]">
                Freelancers
              </span>
          </h2>

          <p className="text-lg text-[#737373] leading-7 mb-2">
            Create and send professional invoices, get paid faster, and track payments—with our simple invoicing tool 
            designed for freelancers in Africa and beyond.
          </p>

          <p className="text-[#285cb4] font-medium mb-2">
            No monthly subscriptions - pay only 1% when your clients pay you.
          </p>

          <div className="w-full flex gap-3 mt-1">
            <div className="w-fit ">
              <HeroButton buttonText="Get Started for Free"/>
            </div>
            <div className="w-fit h-[54px] flex items-center px-5 border border-[#d1d5db] rounded-xl cursor-pointer
              hover:bg-[#737373]/10 transition-all duration-200">
              <p className="font-medium text-lg">View Features</p>
            </div>
          </div>

        </div>

        <div className="w-[600px] aspect-square bg-cover bg-right">
          <img src={hero} alt="" className="drop-shadow-xl" />
        </div>

      </div>
    </>
  )
}

export default HomePage;