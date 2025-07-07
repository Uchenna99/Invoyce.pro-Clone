import { CreditCard, FileText, LayoutDashboard, Settings, Users } from "lucide-react"
import { useState } from "react";

interface Props {
    name: string;
    expand: boolean;
    handleClick: ()=>void;
}

const SectionSelectNull = ({ name, handleClick, expand }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <>
        <div className={`w-full h-10 flex items-center gap-3 rounded-xl cursor-pointer transition-all duration-300 
            bg-transparent hover:bg-[#f5f5f5] group ${expand? 'px-4':'justify-center'}`} 
            onClick={handleClick} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>

            {
                name === 'Dashboard'?
                <LayoutDashboard 
                    size={20} 
                    color={hovering? '#0a0a0a' : '#4a5565'}
                /> :
                name === 'Clients'?
                <Users 
                    size={20} 
                    color={hovering? '#0a0a0a' : '#4a5565'}
                /> :
                name === 'Invoices'?
                <FileText 
                    size={20} 
                    color={hovering? '#0a0a0a' : '#4a5565'}
                /> :
                name === 'Transactions'?
                <CreditCard 
                    size={20} 
                    color={hovering? '#0a0a0a' : '#4a5565'}
                /> :
                name === 'Settings'?
                <Settings 
                    size={20} 
                    color={hovering? '#0a0a0a' : '#4a5565'}
                /> : null
            }

            {
                expand &&
                <p className="text-sm font-medium text-[#4a5565] group-hover:text-[#0a0a0a]">
                    {name}
                </p>
            }

        </div>
    </>
  )
}

export default SectionSelectNull