import { useNavigate } from "react-router-dom";
import TabBarCell from "./TabBarCell";


interface Props {
    currentSection: string;
    onClick: (section: string)=>void;
}

const TabBar = ({ currentSection, onClick }:Props) => {
    const navigate = useNavigate();

  return (
    <>
        <div className="w-full h-16 flex justify-around border-t border-[#e5e5e5] transition-all duration-300 bg-white 
            fixed bottom-0 left-0 z-50 lg:hidden">

            <TabBarCell
                name="Dashboard"
                currentSection={currentSection}
                onClick={()=> {
                    onClick('Dashboard');
                    location.pathname !== '/dashboard'? navigate('/dashboard') : null;
                }}
            />
            <TabBarCell
                name="Clients"
                currentSection={currentSection}
                onClick={()=> {
                    onClick('Clients');
                    location.pathname !== '/dashboard/clients'? navigate('clients') : null;
                }}
            />
            <TabBarCell
                name="Invoices"
                currentSection={currentSection}
                onClick={()=> {
                    onClick('Invoices');
                    location.pathname !== '/dashboard/invoices'? navigate('invoices') : null;
                }}
            />
            <TabBarCell
                name="Transactions"
                currentSection={currentSection}
                onClick={()=> {
                    onClick('Transactions');
                    location.pathname !== '/dashboard/transactions'? navigate('transactions') : null;
                }}
            />
            <TabBarCell
                name="Settings"
                currentSection={currentSection}
                onClick={()=> {
                    onClick('Settings');
                    location.pathname !== '/dashboard/settings'? navigate('settings') : null;
                }}
            />

        </div>
    </>
  )
}

export default TabBar;