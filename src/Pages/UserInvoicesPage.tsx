import { FilePlus, FileText, Search } from "lucide-react";
import ItemsCount from "../Components/Dashboard/ItemsCount";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";



const UserInvoicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  },[]);

  return (
    <>
        <div className="w-full h-fit flex flex-col max-lg:pb-20 py-4 gap-6">

          <div className="w-full h-fit flex justify-between items-center gap-4">

            <div className="w-fit flex flex-col ">
              <h2 className="text-[#0a0a0a] text-2xl font-bold tracking-tight mb-1">
                Invoices
              </h2>
              <p className="text-[#737373] text-sm">
                Manage your invoices
              </p>
            </div>

            <button className="w-fit h-9 px-3 flex items-center gap-4 bg-[#285cb4] hover:bg-[#285cb4]/90 text-white font-medium 
              justify-center rounded-lg text-sm text-nowrap">
              <FilePlus size={16} />
              Create Invoice
            </button>

          </div>


          <div className="w-full h-fit flex flex-col gap-4">
            <div className="w-full h-fit flex items-center flex-wrap gap-2">

              <ItemsCount 
                name="All" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />
              <ItemsCount 
                name="Draft" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />
              <ItemsCount 
                name="Sent" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />
              <ItemsCount 
                name="Paid" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />
              <ItemsCount 
                name="Overdue" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />
              <ItemsCount 
                name="Cancelled" selected={selectedFilter} count={0}
                onClick={(filterChange)=> setSelectedFilter(filterChange)}
              />

            </div>

            <div className="w-112 max-w-full h-9 relative flex items-center">
              <Search size={16} color="#99a1af" className="absolute left-3"/>
              <input type="text" placeholder="Search invoices..."
                className="w-full h-full rounded-lg border-none pl-10 pr-4 text-sm text-[#0a0a0a] placeholder-[#737373] shadow-sm 
                transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
              />
            </div>
          </div>


          {
            loading?
            <div className="w-full h-fit flex items-center justify-center pt-20">
              <Loader size={8}/>
            </div>
            :
            <div className="w-full h-fit flex flex-col items-center justify-center rounded-md border border-[#e5e5e5] py-12 px-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-5">
                  <FileText size={32} color="#285cb4" />
              </div>
              <p className="text-[#0a0a0a] text-xl font-semibold mb-2">
                  No invoices yet
              </p>
              <p className="text-[#737373] text-sm mb-4 w-80 max-w-full text-center">
                  Create your first invoice to get started. You can create, send, and track payments for your invoices here.
              </p>

              <button className="w-fit px-3 flex items-center gap-4 bg-[#285cb4] hover:bg-[#285cb4]/90 text-white font-medium 
                  justify-center rounded-lg h-9 text-sm text-nowrap mt-1">
                  <FilePlus size={16} />
                  Create Invoice
              </button>
            </div>
          }

        </div>
    </>
  )
}

export default UserInvoicesPage;