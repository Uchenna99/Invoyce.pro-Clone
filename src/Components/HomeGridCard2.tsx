import type { Card2 } from "./HowItWorksSecttion";



const HomeGridCard2 = ({ heading, info }:Card2) => {
  return (
    <>
        <div className="flex flex-col gap-3 p-6 rounded-lg border border-[#e5e5e5] shadow-sm">

            <p className="text-lg text-[#285cb4] font-medium">
                {heading}
            </p>

            <p className="text-[#737373] leading-relaxed">
                {info}
            </p>

        </div>
    </>
  )
}

export default HomeGridCard2;