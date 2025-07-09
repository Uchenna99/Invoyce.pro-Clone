import { ChartColumn, CircleHelp, CreditCard, ExternalLink } from "lucide-react";
import { useState } from "react";
import TransactionHistory from "../Components/Dashboard/TransactionHistory";
import BankAccounts from "../Components/Dashboard/BankAccounts";


const UserTransactionsPage = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="w-full h-fit flex flex-col max-lg:pb-27 py-4 gap-6">

        <div className="flex flex-col">
          <h2 className="text-[#0a0a0a] text-xl sm:text-2xl font-semibold tracking-tight mb-1">
              Transactions & Banking
          </h2>
          <p className="text-[#737373] text-sm">
              Track your payments and manage your bank accounts
          </p>
        </div>


        <div className="w-full h-14 flex gap-4 md:gap-8 border-b border-border pb-[1px] mb-2">

          <div className={`flex-1 flex items-center justify-center gap-2 rounded-md relative z-20 transition-all duration-200 cursor-default 
            ${active === 1? 'shadow-sm shadow-shadow text-text-black' : 'text-text-gray hover:text-text-black'}`}
            onClick={()=> active !== 1? setActive(1): null}>

            <ChartColumn size={16}/>
            <p className="text-sm font-medium">
              Transaction History
            </p>
            <div className={`w-[calc(100%-2px)] h-[2px] absolute -bottom-[2px] z-10 ${active === 1? 'bg-primary':'bg-transparent'} 
              transition-all duration-300`}></div>

          </div>

          <div className={`flex-1 flex items-center justify-center gap-2 rounded-md relative z-20 transition-all duration-200 cursor-default 
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
          <BankAccounts/>
        }


        <div className="w-full border border-primary/20 shadow-sm rounded-xl p-6 bg-primary/5 mt-6">

          <div className="flex items-center gap-2">

            <CircleHelp size={20} color="#285cb4"/>
            <p className="text-text-black font-semibold max-sm:text-sm">
              About Split Payments
            </p>

          </div>

          <p className="text-text-gray text-xs sm:text-sm mt-9">
            When your clients pay an invoice, the payment is automatically split between your account and our platform. 99% of each 
            payment (minus Paystack fees) goes directly to your connected bank account.
          </p>
          <p className="text-text-gray text-xs sm:text-sm mt-3 sm:mt-4">
            You must have a verified bank account in the same currency as the invoice to receive payments.
          </p>

          <div className="w-full flex gap-2 text-primary items-center justify-center mt-4 text-nowrap cursor-pointer group">
            <p className="text-xs sm:text-sm font-medium group-hover:underline underline-offset-4">
              Learn more about split payments
            </p>
            <ExternalLink size={16}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default UserTransactionsPage;