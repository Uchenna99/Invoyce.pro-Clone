import { ChevronLeft } from "lucide-react";
import logo from "../assets/Images/logo.svg"
import SectionSelect from "../Components/Dashboard/SectionSelect";
import { useState } from "react";



const UserDashboardLayout = () => {
    const [selectedSection, setSelectedSection] = useState('Dashboard');
    const [expand, setExpand] = useState(true);

  return (
    <>
        <div className="w-full h-screen min-h-screen flex flex-row bg-white">

            <div className={`${expand? 'w-[256px]':'w-[72px]'} h-full border-r border-[#e5e5e5] hidden lg:flex flex-col 
                transition-all duration-300`}>

                <div className={`w-full h-16 border-b border-[#e5e5e5] flex items-center justify-between 
                    ${expand? 'px-4':'pl-4 pr-1'}`}>
                    <div className="w-fit h-full flex items-center gap-2 cursor-pointer group">
                        <img src={logo} alt="logo" className="w-[26px] group-hover:scale-110 transition-all duration-300" />
                        {
                            expand &&
                            <p className="text-lg text-[#285cb4] font-bold tracking-tight">Invoyce</p>
                        }
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#f5f5f5] transition-all duration-300"
                        onClick={()=>setExpand(!expand)}>
                        <ChevronLeft size={16} color="#0a0a0a" />
                    </div>
                </div>

                <div className="w-full h-[calc(100%-64px)] flex flex-col justify-between p-4">

                    <div className="w-full h-fit flex flex-col gap-1">
                        <SectionSelect
                            name="Dashboard"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> setSelectedSection('Dashboard')}
                        />
                        <SectionSelect
                            name="Clients"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> setSelectedSection('Clients')}
                        />
                        <SectionSelect
                            name="Invoices"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> setSelectedSection('Invoices')}
                        />
                        <SectionSelect
                            name="Transactions"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> setSelectedSection('Transactions')}
                        />
                        <SectionSelect
                            name="Settings"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> setSelectedSection('Settings')}
                        />
                    </div>

                    <div className="w-full h-14 bg-amber-100 flex border-t border-[#e5e5e5]"></div>

                </div>

            </div>



            <div className="w-full lg:w-[calc(100%-255px)] h-full flex flex-col transition-all duration-300">

                <div className="w-full h-16 flex border-b border-[#e5e5e5]"></div>

            </div>

        </div>
    </>
  )
}

export default UserDashboardLayout;