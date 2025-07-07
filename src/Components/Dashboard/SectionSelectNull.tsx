import { LayoutDashboard } from "lucide-react"
import { useState } from "react";

interface Props {
    name: string;
    handleClick: ()=>void;
}

const SectionSelectNull = ({ name, handleClick }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <>
        <div className={`w-full h-10 flex items-center px-4 gap-3 rounded-xl cursor-pointer transition-all duration-300 
            bg-transparent hover:bg-[#f5f5f5] group`} 
            onClick={handleClick} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>

            <LayoutDashboard 
                size={20} 
                color={hovering? '#0a0a0a' : '#4a5565'}
            />

            <p className="text-sm font-medium text-[#4a5565] group-hover:text-[#0a0a0a]">
                {name}
            </p>

        </div>
    </>
  )
}

export default SectionSelectNull