import { useEffect, useState } from "react";
import Loader from "../Loader";


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


            <div className="w-full flex flex-col border border-border rounded-xl px-6 py-5 shadow-sm">

                <div className="flex flex-col">
                    <p className="text-text-black font-semibold">
                        Transaction History
                    </p>
                    <p className="text-sm text-text-gray">
                        All your payments and platform fees
                    </p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default TransactionHistory;