import { useEffect, useState } from "react";
import Loader from "../Loader";
import { ChartColumn, Search } from "lucide-react";
import TransactionsDropdownMenu from "./TransactionsDropdownMenu";


const TransactionHistory = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    },[]);

  return (
    <>
        <div className="w-full h-fit flex flex-col gap-6">

            <div className="w-full h-fit flex gap-8">

                <div className="w-full md:w-1/2 flex flex-col gap-9 border border-border rounded-xl shadow-sm p-6">
                    <p className="text-text-gray font-medium text-sm">
                        Total Transactions
                    </p>
                    
                    <div className="flex flex-col gap-1">
                        {
                            loading?
                            <div className="p-1">
                                <Loader size={6}/>
                            </div>
                            :
                            <p className="text-2xl text-text-black font-bold">
                                0
                            </p>
                        }
                        <p className="text-xs text-text-gray">
                            All time
                        </p>
                    </div>
                </div>
                
                <div className="w-1/2 max-md:hidden"></div>

            </div>


            <div className="w-full flex flex-col border border-border rounded-xl px-6 py-6 shadow-sm gap-6">

                <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-3">

                    <div className="flex flex-col pt-2">
                        <p className="text-text-black font-semibold mb-2 leading-0">
                            Transaction History
                        </p>
                        <p className="text-sm text-text-gray">
                            All your payments and platform fees
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2">

                        <div className="h-9 w-full sm:w-65 md:w-60 relative flex items-center">
                            <Search size={16} color="#737373" className="absolute left-2"/>
                            <input type="text" placeholder="Search transactions..."
                                className="w-full h-9 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                                transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                            />
                        </div>

                        <TransactionsDropdownMenu/>

                    </div>
                </div>


                <div className="w-full h-fit flex flex-col items-center justify-center py-14 px-4">
                    <div className="w-12 h-12 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-4">
                    
                    <ChartColumn size={24} color="#285cb4" />
                    </div>
                    <p className="text-[#0a0a0a] text-lg font-medium mb-2">
                        No transactions yet
                    </p>
                    <p className="text-[#737373] text-center mb-4 w-100 max-w-full">
                        Once you receive payments for your invoices, they'll appear here.
                    </p>

                </div>

            </div>

            
        </div>
    </>
  )
}

export default TransactionHistory;