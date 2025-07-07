import { CircleDollarSign } from "lucide-react";


const RevenueOverview = () => {
  return (
    <>
        <div className="border border-[#e5e5e5] rounded-xl shadow-sm px-6 py-5 col-span-2">

            <div className="flex flex-col">
                <p className="text-[#0a0a0a] font-semibold">
                    Revenue Overview
                </p>
                <p className="text-[#737373] text-sm">
                    Your revenue for the last 6 months
                </p>
            </div>


            <div className="w-full flex flex-col items-center py-30">
                <div className="w-10 h-10 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-3">
                    <CircleDollarSign size={20} color="#285cb4" />
                </div>
                <p className="text-[#0a0a0a] text-sm font-semibold mb-1">
                    No revenue data yet
                </p>
                <p className="text-[#737373] text-sm">
                    Create and get paid for your first invoice to see your revenue chart
                </p>
            </div>

        </div>
    </>
  )
}

export default RevenueOverview;