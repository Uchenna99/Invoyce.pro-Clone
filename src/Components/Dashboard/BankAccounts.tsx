import { Banknote, Plus } from "lucide-react";


const BankAccounts = () => {
  return (
    <>
        <div className="w-full h-fit flex flex-col items-center justify-center pb-8 pt-12 px-4">
            <div className="w-12 h-12 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-4">
                <Banknote size={24} color="#285cb4" />
            </div>
            <p className="text-[#0a0a0a] text-lg font-medium mb-2">
                No bank accounts added
            </p>
            <p className="text-[#737373] text-center mb-4">
                Add your bank account to receive payouts
            </p>

            <button className="w-fit px-3 flex items-center gap-4 bg-[#285cb4] hover:bg-[#285cb4]/90 text-white font-medium 
                justify-center rounded-lg h-9 text-sm text-nowrap">
                <Plus size={16} />
                Add Bank Account
            </button>
        </div>
    </>
  )
}

export default BankAccounts;