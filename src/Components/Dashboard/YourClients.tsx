import { Plus, User } from "lucide-react";


const YourClients = () => {
  return (
    <>
        <div className="flex flex-col border border-[#e5e5e5] rounded-xl shadow-sm p-6 md:col-span-2 gap-7">

            <div className="flex py-5 gap-2">
                <User size={16} color="#285cb4"/>
                <p className="text-[#0a0a0a] font-medium leading-none">
                    Your Clients
                </p>
            </div>


            <div className="w-full h-fit flex flex-col items-center justify-center rounded-md border border-[#e5e5e5] p-8">
                <div className="w-12 h-12 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-3">
                    <User size={24} color="#285cb4" />
                </div>
                <p className="text-[#0a0a0a] text-lg font-medium mb-1">
                    No clients yet
                </p>
                <p className="text-[#737373] text-sm mb-4">
                    Add your first client to start creating invoices
                </p>

                <button className="w-[112px] flex items-center gap-2 bg-[#285cb4] hover:bg-[#285cb4]/90 text-white font-medium 
                    justify-center rounded-lg h-8 text-sm text-nowrap">
                    <Plus size={16} />
                    Add Client
                </button>
            </div>

        </div>
    </>
  )
}

export default YourClients;