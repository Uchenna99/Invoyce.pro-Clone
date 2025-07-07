import { CreditCard, FileText, LayoutDashboard, Settings, Users } from "lucide-react";

interface Props {
    name: string;
    expand: boolean;
}

const SectionSelectActive = ({ name, expand }:Props) => {

  return (
    <>
        <div className={`w-full h-10 flex items-center gap-3 rounded-xl cursor-pointer transition-all duration-300 
            bg-[#285bb41a] hover:bg-[#285bb433] ${expand? 'px-4':'justify-center'}`} >

            {
                name === 'Dashboard'?
                <LayoutDashboard 
                    size={20} 
                    color='#285cb4'
                /> :
                name === 'Clients'?
                <Users 
                    size={20} 
                    color='#285cb4'
                /> :
                name === 'Invoices'?
                <FileText 
                    size={20} 
                    color='#285cb4'
                /> :
                name === 'Transactions'?
                <CreditCard 
                    size={20} 
                    color='#285cb4'
                /> :
                name === 'Settings'?
                <Settings 
                    size={20} 
                    color='#285cb4'
                /> : null
            }

            {
                expand &&
                <p className="text-sm font-medium text-[#285cb4]">
                    {name}
                </p>
            }

        </div>
    </>
  )
}

export default SectionSelectActive;