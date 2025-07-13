import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Phone, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SelectorWithSearch from "./SelectorWithSearch";

interface Props {
    close: ()=>void;
}

const AddBankAccountForm = ({ close }:Props) => {
    const closeRef = useRef<HTMLDivElement>(null);
    const [buttonActive, setButtonActive] = useState(false);
    const [email, setEmail] = useState('');
    const countries = ['Nigeria', 'Ghana', 'Kenya'];

    useEffect(()=>{
        closeRef.current?.focus();
    },[]);

    useEffect(()=>{
        if(email.includes('@') && email.includes('.')) {
            if(!buttonActive) { setButtonActive(true) }
        }else{
            if(buttonActive) { setButtonActive(false) }
        }
    },[email]);

  return (
    <>
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-black/50 flex items-center justify-center" onClick={close}></div>

        <div className="w-full flex justify-center p-5 fixed z-100 left-0 top-1/2 right-1/2 -translate-y-1/2">

            <motion.div className="w-full sm:w-125 bg-white rounded-lg p-5 flex flex-col gap-3 relative 
                transition-all duration-200"
                initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0}} >

                <div className="flex absolute top-5 right-5 p-0.5 rounded-lg focus:ring-2 focus:ring-[#285cb4]/70" 
                    ref={closeRef} tabIndex={-1}>
                    <X size={16} color="#0a0a0a" onClick={close} />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold text-text-black">Add Bank Account</p>
                    <p className="text-text-gray text-sm">
                        Add your bank account details for receiving payments.
                    </p>
                </div>


                <SelectorWithSearch list={countries} flag/>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="2" className="text-sm font-medium flex gap-2">Email Address <span className="text-error1">*</span></label>
                    <div className="flex items-center relative">
                        <Mail size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="email" id="2" placeholder="client@company.com"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="w-full h-10 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="3" className="text-sm font-medium flex gap-2">Phone Number 
                        <span className="w-fit py-0.5 px-2 bg-gray-100 rounded-xl">
                            <p className="text-xs text-gray-600 font-medium">Optional</p>
                        </span>
                    </label>
                    <div className="flex items-center relative">
                        <Phone size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="3" placeholder="+1 (555) 000-0000"
                            className="w-full h-10 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="4" className="text-sm font-medium flex gap-2">Business Address 
                        <span className="w-fit py-0.5 px-2 bg-gray-100 rounded-xl">
                            <p className="text-xs text-gray-600 font-medium">Optional</p>
                        </span>
                    </label>
                    <div className="flex items-center relative">
                        <MapPin size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="4" placeholder="123 Business Ave, Suite 101"
                            className="w-full h-10 rounded-lg border-none pl-10 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col-reverse sm:flex-row justify-end items-center gap-3">
                    <button className="w-fit h-8 flex items-center justify-center px-3 border border-border rounded-lg hover:bg-accent 
                        transition-all duration-200" onClick={close}>
                        <p className="text-sm text-text-black font-medium">Cancel</p>
                    </button>

                    <button className={`w-fit h-8 flex items-center justify-center px-3 border rounded-lg text-sm font-medium 
                        text-white cursor-default transition-all duration-200 
                        ${buttonActive? 'bg-primary hover:bg-primary/90':'bg-primary/50'}`}>
                        Create Client
                    </button>
                </div>

            </motion.div>

        </div>
    </>
  )
}

export default AddBankAccountForm;