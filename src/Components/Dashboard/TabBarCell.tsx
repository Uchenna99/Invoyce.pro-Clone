import { LayoutDashboard } from "lucide-react";
import { useState } from "react";

interface Props {
    name: string;
    currentSection: string;
}

const TabBarCell = ({ name, currentSection }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <>
        <div className={`w-fit h-full flex flex-col justify-center items-center gap-1 px-1 
            text-[${currentSection === name? '#285cb4': hovering? '#0a0a0a' : '#4a5565'}]`}
            onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

            <LayoutDashboard size={20}/>
            
            <p className="text-[10px] text-xs">
                {name}
            </p>

        </div>
    </>
  )
}

export default TabBarCell;