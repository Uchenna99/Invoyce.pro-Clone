import { ChartColumn, CreditCard } from "lucide-react";
import { useState } from "react";
import TransactionHistory from "../Components/Dashboard/TransactionHistory";


const UserTransactionsPage = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="w-full h-fit flex flex-col max-lg:pb-20 py-4 gap-6 ">

        <div className="flex flex-col">
          <h2 className="text-[#0a0a0a] text-2xl font-semibold tracking-tight mb-1">
              Transactions & Banking
          </h2>
          <p className="text-[#737373] text-sm">
              Track your payments and manage your bank accounts
          </p>
        </div>


        <div className="w-full h-14 flex gap-8 border-b border-border pb-[1px]">

          <div className={`flex-1 flex items-center justify-center gap-2 rounded-md relative z-20 transition-all duration-300 cursor-default 
            ${active === 1? 'shadow-sm shadow-shadow text-text-black' : 'text-text-gray hover:text-text-black'}`}
            onClick={()=> active !== 1? setActive(1): null}>

            <ChartColumn size={16}/>
            <p className="text-sm font-medium">
              Transaction History
            </p>
            <div className={`w-[calc(100%-2px)] h-[2px] absolute -bottom-[2px] z-10 ${active === 1? 'bg-primary':'bg-transparent'} 
              transition-all duration-300`}></div>

          </div>

          <div className={`flex-1 flex items-center justify-center gap-2 rounded-md relative z-20 transition-all duration-300 cursor-default 
            ${active === 2? 'shadow-sm shadow-shadow text-text-black' : 'text-text-gray hover:text-text-black'}`}
            onClick={()=> active !== 2? setActive(2): null}>

            <CreditCard size={16}/>
            <p className="text-sm font-medium">
              Bank Accounts
            </p>
            <div className={`w-[calc(100%-2px)] h-[2px] absolute -bottom-[2px] z-10 ${active === 2? 'bg-primary':'bg-transparent'} 
              transition-all duration-300`}></div>

          </div>

        </div>

        
        {
          active === 1?
          <TransactionHistory/>
          :
          null
        }

      </div>
    </>
  )
}

export default UserTransactionsPage;