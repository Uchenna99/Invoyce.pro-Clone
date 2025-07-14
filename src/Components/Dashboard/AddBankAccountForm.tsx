import { motion } from "framer-motion";
import { Building, CreditCard, RefreshCw, X } from "lucide-react";
import { useEffect, useState } from "react";
import SelectorWithSearch from "./SelectorWithSearch";
import ToggleButton from "./ToggleButton";

interface Props {
    close: ()=>void;
}

const AddBankAccountForm = ({ close }:Props) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [selectedBank, setSelectedBank] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [verify, setVerify] = useState(false);
    const [accNumber, setAccNumber] = useState('');
    const countries: string[] = ['Nigeria', 'Ghana', 'Kenya'];
    const nigerianBanks: string[] = [
    "Access Bank",
    "Citibank",
    "Ecobank Nigeria",
    "Fidelity Bank",
    "First Bank of Nigeria",
    "First City Monument Bank (FCMB)",
    "Globus Bank",
    "Guaranty Trust Bank (GTBank)",
    "Heritage Bank",
    "Jaiz Bank",
    "Keystone Bank",
    "Parallex Bank",
    "Polaris Bank",
    "Providus Bank",
    "Stanbic IBTC Bank",
    "Standard Chartered Bank",
    "Sterling Bank",
    "Suntrust Bank",
    "Titan Trust Bank",
    "Union Bank of Nigeria",
    "United Bank for Africa (UBA)",
    "Unity Bank",
    "Wema Bank",
    "Zenith Bank"
    ];

    useEffect(()=>{
        if(accNumber.length === 10 && selectedBank) {
            if(!verify) { setVerify(true); setButtonActive(true) }
        }else{
            if(verify) { setVerify(false); setButtonActive(false) }
        }
    },[accNumber, selectedBank, selectedCountry]);

    useEffect(()=>{
    },[]);

  return (
    <>
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-black/50 flex items-center justify-center" onClick={close}></div>

        <div className="w-full sm:w-fit flex justify-center p-5 fixed z-100 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2">

            <motion.div className="w-full sm:w-125 bg-white rounded-lg p-6 flex flex-col gap-4 relative 
                transition-all duration-200"
                initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0}} >

                <div className="flex absolute top-5 right-5 p-0.5 rounded-lg focus:ring-2 focus:ring-[#285cb4]/70" >
                    <X size={16} color="#0a0a0a" onClick={close} />
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-text-black">Add Bank Account</p>
                    <p className="text-text-gray text-sm">
                        Add your bank account details for receiving payments.
                    </p>
                </div>


                <SelectorWithSearch name="Country" list={countries} selection={(country)=>setSelectedCountry(country)} flag/>

                <SelectorWithSearch name="Bank" list={nigerianBanks} selection={(bank)=>setSelectedBank(bank)}/>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="2" className="text-sm font-medium">Account Number</label>
                    <div className="flex items-center gap-2 relative">
                        <CreditCard size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="2" placeholder="10-digit account number"
                            value={accNumber} maxLength={10}
                            onChange={(e)=> setAccNumber(e.target.value)}
                            className="w-full h-10 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />

                        <div className={`h-10 min-w-fit flex items-center gap-[10px] border border-border rounded-lg px-2 cursor-default 
                            ${verify? 'pointer-events-auto hover:bg-accent':'pointer-events-none'}`}>
                            <RefreshCw size={16} color="#737373"/>
                            <p className="text-text-gray text-sm">Verify</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[6px] w-full mt-1" >
                    <label htmlFor="4" className="text-sm font-medium">Account Name</label>
                    <div className="flex items-center relative">
                        <Building size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="4" placeholder="Account holder name"
                            className="w-full h-10 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-between items-center gap-2 mt-1">

                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">Default Account</p>
                        <p className="text-xs text-text-gray font-medium -mt-0.5">
                            Use this account for all payouts
                        </p>
                    </div>

                    <ToggleButton toggle={toggle} 
                        change={()=> verify? setToggle(!toggle) : null } 
                        activeToggle={verify} 
                    />
                </div>

                <div className="flex flex-col gap-[6px] w-full mt-1">
                    <label htmlFor="4" className="text-sm font-medium flex items-center justify-between gap-2">Account Verification
                        <p className="text-xs text-error1 font-medium">Required</p>
                    </label>
                    <div className={`flex items-center justify-center gap-4 border border-border rounded-lg h-9 cursor-default 
                         transition-all duration-200 ${verify? 'text-text-black hover:bg-accent':'text-text-gray'}`}>
                        <RefreshCw size={16}/>
                        <p className="text-sm font-medium">
                            Verify Account
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col-reverse sm:flex-row justify-end items-center gap-3 mt-4">
                    <button className="w-fit h-9 flex items-center justify-center px-4 border border-border rounded-lg hover:bg-accent 
                        transition-all duration-200" onClick={close}>
                        <p className="text-sm text-text-black font-medium">Cancel</p>
                    </button>

                    <button className={`w-fit h-9 flex items-center justify-center px-4 border rounded-lg text-sm font-medium 
                        text-white cursor-default transition-all duration-200 
                        ${buttonActive? 'bg-primary hover:bg-primary/90':'bg-primary/50'}`}>
                        Save Bank Account
                    </button>
                </div>

            </motion.div>

        </div>
    </>
  )
}

export default AddBankAccountForm;