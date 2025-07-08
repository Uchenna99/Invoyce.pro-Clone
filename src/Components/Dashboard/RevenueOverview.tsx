import { CircleDollarSign } from "lucide-react";


const RevenueOverview = () => {
  return (
    <>
        <div className="flex flex-col border border-[#e5e5e5] rounded-xl shadow-sm p-6 md:col-span-2 gap-7">

            <div className="flex flex-col">
                <p className="text-[#0a0a0a] font-semibold leading-none mb-2">
                    Revenue Overview
                </p>
                <p className="text-[#737373] text-sm leading-none">
                    Your revenue for the last 6 months
                </p>
            </div>


            <div className="w-full h-[300px] flex flex-col items-center justify-center bg-gray-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-3">
                    <CircleDollarSign size={24} color="#285cb4" />
                </div>
                <p className="text-[#0a0a0a] text-sm font-medium mb-1">
                    No revenue data yet
                </p>
                <p className="text-[#737373] text-sm text-center">
                    Create and get paid for your first invoice to see your revenue chart
                </p>
            </div>

        </div>
    </>
  )
}

export default RevenueOverview;