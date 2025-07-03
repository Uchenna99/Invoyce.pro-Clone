import { useState } from "react";
import icon1 from "../assets/Images/invoice.svg"


const HomeGridCard1 = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
        <div className={`h-fit bg-white rounded-2xl overflow-hidden flex items-end justify-end relative 
          transition-all duration-300 ease-in-out ${hover? 'shadow-md -translate-y-1':'shadow-sm'}`}>
          <div className={`w-64 h-64 rounded-full bg-[#ebeff7] absolute translate-x-1/2 translate-y-1/2 
            ${hover? 'scale-105':''} transition-all duration-300 ease-in-out`}>
          </div>

          <div className="w-full h-full relative z-20 flex flex-col gap-5 p-8 rounded-2xl"
            onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>

            <div className={`w-14 h-14 flex justify-center items-center rounded-2xl transition-all duration-300 ease-in-out 
              ${hover? 'bg-[#285cb4]/15 scale-110':'bg-[#e8edf7]'}`}>
              <img src={icon1} alt="" 
                className={`w-7 h-7 transition-all duration-300 ease-in-out ${hover? 'scale-110':''}`} 
              />
            </div>

            <h4 className={`text-xl font-bold transition-all duration-300 ease-in-out ${hover? 'text-[#285cb4]':'text-[#0a0a0a]'}`}>
              Professional Invoice Generator
            </h4>

            <p className="text-[#737373] leading-relaxed">
              Create branded invoices in seconds with your logo and business details for clients in Africa and worldwide.
            </p>

          </div>
        </div>
    </>
  )
}

export default HomeGridCard1;