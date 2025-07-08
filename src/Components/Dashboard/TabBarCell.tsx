import { CreditCard, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
import { useState } from "react";

interface Props {
    name: string;
    currentSection: string;
    onClick: ()=>void;
}

const TabBarCell = ({ name, currentSection, onClick }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <>
        <div className={`w-fit h-full flex flex-col justify-center items-center gap-1 px-1 
            text-[${currentSection === name? '#285cb4': hovering? '#0a0a0a' : '#4a5565'}]`}
            onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)} onClick={onClick}>

            {
                name === 'Dashboard'?
                <LayoutDashboard size={20}/> :
                name === 'Clients'?
                <Users size={20}/> :
                name === 'Invoices'?
                <FileText size={20}/> :
                name === 'Transactions'?
                <CreditCard size={20}/> :
                name === 'Settings'?
                <Settings size={20}/> : null
            }
            
            <p className="text-[10px] text-xs">
                {name}
            </p>

        </div>
    </>
  )
}

export default TabBarCell;