import { FileText } from "lucide-react";

interface Props {
    onClick: ()=>void;
}

const RecentInvoices = ({ onClick }:Props) => {
  return (
    <>
        <div className="flex flex-col border border-[#e5e5e5] rounded-xl shadow-sm p-6 gap-7">

            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-[#0a0a0a] font-semibold leading-none mb-2">
                        Recent Invoices
                    </p>
                    <p className="text-[#737373] text-sm leading-none">
                        Latest invoice activity
                    </p>
                </div>

                <div className="w-fit h-8 px-3 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#f5f5f5] 
                    transition-all duration-200">
                    <p className="text-sm">View all</p>
                </div>
            </div>


            <div className="w-full flex flex-col items-center justify-center py-8">
                <div className="w-12 h-12 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-2">
                    <FileText size={24} color="#285cb4" />
                </div>
                <p className="text-[#0a0a0a] font-medium mb-2">
                    No invoices yet
                </p>
                <p className="text-[#737373] text-sm text-center">
                    Create your first invoice to get started
                </p>

                <div className="w-fit min-h-8 px-3 flex items-center text-white bg-[#285cb4] hover:bg-[#285cb4]/90 
                    rounded-lg cursor-pointer mt-4 transition-all duration-200"
                    onClick={onClick}>
                    <p className="text-sm font-semibold">Create Invoice</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default RecentInvoices;