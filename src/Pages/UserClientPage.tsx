import { LayoutGrid, List, Plus, Search } from "lucide-react";
import { useState } from "react";
import YourClients from "../Components/Dashboard/YourClients";



const UserClientPage = () => {
  const [layout, setLayout] = useState('grid');
  return (
    <>
        <div className="w-full h-fit flex flex-col max-lg:pb-20 py-4 gap-6">

          <div className="w-full h-fit flex max-sm:flex-col justify-between sm:items-center gap-4">

            <div className="w-fit flex flex-col ">
              <h2 className="text-[#0a0a0a] text-2xl font-bold tracking-tight mb-1">
                Clients
              </h2>
              <p className="text-[#737373] text-sm">
                Manage your clients and their invoices
              </p>
            </div>

            <button className="sm:w-[112px] flex items-center gap-2 bg-[#285cb4] hover:bg-[#285cb4]/90 text-white font-medium 
              justify-center rounded-lg h-8 text-sm text-nowrap">
              <Plus size={16} />
              Add Client
            </button>

          </div>


          <div className="w-full h-fit flex max-sm:flex-col gap-4">

            <div className="h-9 max-sm:w-full flex-1 relative flex items-center">
              <Search size={16} color="#99a1af" className="absolute left-3 mt-1"/>
              <input type="text" placeholder="Search clients..."
                className="w-full h-9 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
              />
            </div>

            <div className="min-w-fit flex gap-2">
              <button className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 
                ${layout==='grid'? 'bg-[#285cb4] border-transparent hover:bg-[#285cb4]/90':
                'bg-transparent border border-[#e5e5e5] hover:bg-[#f5f5f5]'}`}
                onClick={()=> setLayout('grid')}>
                <LayoutGrid size={16} color={layout === 'grid'? 'white':'#0a0a0a'} />
              </button>

              <button className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 
                ${layout==='list'? 'bg-[#285cb4] border-transparent hover:bg-[#285cb4]/90':
                'bg-transparent border-[#e5e5e5] hover:bg-[#f5f5f5]'}`}
                onClick={()=> setLayout('list')}>
                <List size={16} color={layout === 'list'? 'white':'#0a0a0a'} />
              </button>
            </div>

          </div>


          <YourClients/>

        </div>
    </>
  )
}

export default UserClientPage;