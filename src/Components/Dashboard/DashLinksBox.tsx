import { ChevronRight, CircleCheck, FileText, Users } from "lucide-react";

interface Props {
    theme: 'blue' | 'green';
    head: string;
    info: string;
    icon: 'invoice' | 'client' | 'paid';
    onClick: ()=>void;
}

const DashLinksBox = ({ theme, head, info, icon, onClick }:Props) => {
  return (
    <>
        <div className="flex items-center p-6 gap-3 rounded-xl shadow-sm border border-[#e5e5e5] hover:border-[#285cb4]/50 
            transition-all duration-300 cursor-pointer"
            onClick={onClick}>

            <div className={`w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center 
                ${theme === 'blue'? 'bg-[#285cb4]/10': theme === 'green'? 'bg-green-100':''}`}>
                {
                    icon === 'invoice'?
                    <FileText 
                        size={20} 
                        color={theme === 'blue'? '#285cb4': theme === 'green'? '#00a63e':''}
                    /> :
                    icon === 'client'?
                    <Users
                        size={20} 
                        color={theme === 'blue'? '#285cb4': theme === 'green'? '#00a63e':''} 
                    /> :
                    icon === 'paid'?
                    <CircleCheck
                        size={20} 
                        color={theme === 'blue'? '#285cb4': theme === 'green'? '#00a63e':''} 
                    /> : null
                }
            </div>

            <div className="w-[calc(100%-40px)] flex flex-col">
                <p className="text-[#0a0a0a] font-medium">
                    {head}
                </p>
                <p className="text-[#737373] text-sm">
                    {info}
                </p>
            </div>

            <ChevronRight size={25} color="#737373" />
             
        </div>
    </>
  )
}

export default DashLinksBox;