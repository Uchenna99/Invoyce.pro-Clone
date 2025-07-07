import { Clock, Wallet } from "lucide-react";


const BusinessSummary = () => {
  return (
    <>
        <div className="border border-[#e5e5e5] rounded-xl shadow-sm p-6">

            <div className="w-full border-b border-[#e5e5e5] flex flex-col gap-7 pb-6">
                <div className="flex flex-col">
                    <p className="text-[#0a0a0a] font-semibold leading-none mb-2">
                        Business Summary
                    </p>
                    <p className="text-[#737373] text-sm leading-none">
                        Key metrics for your business
                    </p>
                </div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-[#737373] text-sm">
                        Total Revenue
                    </p>
                    <p className="text-[#0a0a0a] text-xl font-semibold">
                        NGN 0.00
                    </p>
                </div>
            </div>


            <div className="w-full flex flex-col py-4 gap-2">

                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Wallet size={16} color="#737373"/>
                        <p className="text-[#737373] text-sm">Outstanding</p>
                    </div>
                    <p className="text-[#0a0a0a] text-sm font-medium">
                        0 invoices
                    </p>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Clock size={16} color="#737373"/>
                        <p className="text-[#737373] text-sm">Overdue</p>
                    </div>
                    <p className="text-[#0a0a0a] text-sm font-medium">
                        0 invoices
                    </p>
                </div>

            </div>

        </div>
    </>
  )
}

export default BusinessSummary;