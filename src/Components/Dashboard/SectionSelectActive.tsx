import { LayoutDashboard } from "lucide-react";

interface Props {
    name: string;
}

const SectionSelectActive = ({ name }:Props) => {

  return (
    <>
        <div className="w-full h-10 flex items-center px-4 gap-3 rounded-xl cursor-pointer transition-all duration-300 
            bg-[#285bb41a] hover:bg-[#285bb433]" >

            <LayoutDashboard 
                size={20} 
                color='#285cb4'
            />

            <p className="text-sm font-medium text-[#285cb4]">
                {name}
            </p>

        </div>
    </>
  )
}

export default SectionSelectActive;