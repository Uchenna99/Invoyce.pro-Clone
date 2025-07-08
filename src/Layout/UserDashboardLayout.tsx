import { ChevronLeft } from "lucide-react";
import logo from "../assets/Images/logo.svg"
import SectionSelect from "../Components/Dashboard/SectionSelect";
import { createContext, useEffect, useState } from "react";
import SectionSelectNull from "../Components/Dashboard/SectionSelectNull";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TabBar from "../Components/Dashboard/TabBar";

type ContextValues = {
    changeSelectedSection: (section: string)=>void;
}
export const DashboardContext = createContext<ContextValues>({ changeSelectedSection: ()=>{} });


const UserDashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState('Dashboard');
    const [expand, setExpand] = useState(true);

    useEffect(()=>{
        switch (true) {
            case location.pathname === '/dashboard':
                setSelectedSection('Dashboard');
                break;
            case location.pathname === '/dashboard/clients':
                setSelectedSection('Clients');
                break;
            case location.pathname === '/dashboard/invoices':
                setSelectedSection('Invoices');
                break;
            case location.pathname === '/dashboard/transactions':
                setSelectedSection('Transactions');
                break;
            case location.pathname === '/dashboard/settings':
                setSelectedSection('Settings');
                break;
        
            default:
                break;
        }
    },[])

    const changeSelectedSection = (section: string)=>{
        setSelectedSection(section);
    };

  return (
    <>
        <DashboardContext.Provider value={{ changeSelectedSection }}>
        <div className="w-full h-screen min-h-screen flex flex-row bg-white">

            <div className={`${expand? 'w-[256px]':'w-[72px]'} h-full border-r border-[#e5e5e5] hidden lg:flex flex-col 
                transition-all duration-300`}>

                <div className={`w-full h-16 border-b border-[#e5e5e5] flex items-center justify-between 
                    ${expand? 'px-4':'pl-4 pr-1'}`}>
                    <div className="w-fit h-full flex items-center gap-2 cursor-pointer group"
                        onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo" className="w-[26px] group-hover:scale-110 transition-all duration-300" />
                        {
                            expand &&
                            <p className="text-lg text-[#285cb4] font-bold tracking-tight">Invoyce</p>
                        }
                    </div>
                    <div className={`${expand? 'w-8 h-8':'w-6 h-6'} rounded-lg flex items-center justify-center hover:bg-[#f5f5f5] transition-all duration-300`}
                        onClick={()=>setExpand(!expand)}>
                        <ChevronLeft size={16} color="#0a0a0a" className={expand? '':'rotate-180'} />
                    </div>
                </div>

                <div className="w-full h-[calc(100%-64px)] flex flex-col justify-between p-4">

                    <div className="w-full h-fit flex flex-col gap-1">
                        <SectionSelect
                            name="Dashboard"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> {
                                setSelectedSection('Dashboard');
                                location.pathname !== '/dashboard'? navigate('/dashboard') : null;
                            }}
                        />
                        <SectionSelect
                            name="Clients"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=> {
                                setSelectedSection('Clients');
                                location.pathname !== '/dashboard/clients'? navigate('clients') : null;
                            }}
                        />
                        <SectionSelect
                            name="Invoices"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=>{
                                setSelectedSection('Invoices');
                                location.pathname !== '/dashboard/invoices'? navigate('invoices') : null;
                            }}
                        />
                        <SectionSelect
                            name="Transactions"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=>{
                                setSelectedSection('Transactions');
                                location.pathname !== '/dashboard/transactions'? navigate('transactions') : null;
                            }}
                        />
                        <SectionSelect
                            name="Settings"
                            currentSection={selectedSection}
                            expand={expand}
                            handleClick={()=>{
                                setSelectedSection('Settings');
                                location.pathname !== '/dashboard/settings'? navigate('settings') : null;
                            }}
                        />
                    </div>

                    <div className="w-full h-15 flex border-t border-[#e5e5e5] items-center pt-3">
                        <SectionSelectNull
                            name="Sign Out"
                            expand={expand}
                            handleClick={()=> navigate('/')}
                        />
                    </div>

                </div>

            </div>



            <div className={`w-full h-full flex flex-col transition-all duration-300 overflow-y-auto relative 
                ${expand? 'lg:w-[calc(100%-255px)]' : 'lg:w-[calc(100%-72px)]'}`}>

                <div className="w-full h-16 min-h-16 flex border-b border-[#e5e5e5] items-center justify-end px-4 sticky 
                    top-0 z-50 bg-white">

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#285cb4]/10">
                        <p className="text-sm text-[#285cb4] font-semibold">
                            UA
                        </p>
                    </div>

                </div>


                <div className="w-full h-full px-6">
                    <Outlet/>
                </div>

            </div>

            <TabBar currentSection={selectedSection} />

        </div>
        </DashboardContext.Provider>
    </>
  )
}

export default UserDashboardLayout;