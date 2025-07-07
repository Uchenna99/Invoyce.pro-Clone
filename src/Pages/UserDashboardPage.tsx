import { useNavigate } from "react-router-dom";
import DashLinksBox from "../Components/Dashboard/DashLinksBox";
import { useContext } from "react";
import { DashboardContext } from "../Layout/UserDashboardLayout";
import RevenueOverview from "../Components/Dashboard/RevenueOverview";
import BusinessSummary from "../Components/Dashboard/BusinessSummary";
import RecentInvoices from "../Components/Dashboard/RecentInvoices";



const UserDashboardPage = () => {
    const navigate = useNavigate();
    const { changeSelectedSection } = useContext(DashboardContext);
  return (
    <>
        <div className="w-full h-fit flex flex-col py-4 gap-8">

            <div className="flex flex-col">
                <h2 className="text-[#0a0a0a] text-2xl font-bold tracking-tight mb-1">
                    Welcome back
                </h2>
                <p className="text-[#737373]">
                    Here's what's happening with your business today
                </p>
            </div>


            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">

                <DashLinksBox
                    theme="blue" head="New Invoice" info="Create a new invoice"
                    icon="invoice" onClick={()=>{ changeSelectedSection('Invoices'); navigate('invoices') }}
                />
                <DashLinksBox
                    theme="blue"
                    head="Add Client"
                    info="Create a new client"
                    icon="client" onClick={()=>{}}
                />
                <DashLinksBox
                    theme="green"
                    head="Paid"
                    info="0 invoices paid"
                    icon="paid" onClick={()=>{}}
                />
                
                <RevenueOverview/>

                <BusinessSummary/>

            </div>


            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-4">

                <RecentInvoices/>

            </div>

        </div>
    </>
  )
}

export default UserDashboardPage;