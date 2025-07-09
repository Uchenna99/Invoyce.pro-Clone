import { Building2 } from "lucide-react";
import CurrencyDropdownMenu from "./CurrencyDropdownMenu";


const BusinessInfoForm = () => {
  return (
    <>
        <div className="w-full border border-border rounded-xl shadow shadow-shadow px-6 py-5 flex flex-col gap-5">

            <div className="flex flex-col">
                <p className="font-semibold text-text-black mb-[2px]">Business Information</p>
                <p className="text-text-gray text-sm">
                    Update your business details and branding that will appear on invoices
                </p>
            </div>


            <div className="w-full flex flex-col gap-3">

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="1" className="text-sm font-medium">Business name</label>
                    <div className="flex items-center relative">
                        <Building2 size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="1"
                            className="w-full h-10 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                    <p className="text-[0.8rem] text-text-gray mt-[2px]">
                        This will appear on your invoices and email communications
                    </p>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="" className="text-sm font-medium">Default Currency</label>
                    <CurrencyDropdownMenu/>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="2" className="text-sm font-medium">Business Address</label>
                    <textarea name="" id="2" placeholder="Enter your business address"
                        className="w-full h-25 rounded-lg border-none px-3 py-2 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                        transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                    />
                    <p className="text-[0.8rem] text-text-gray mt-[2px]">
                        Your business address will be displayed on invoices
                    </p>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="3" className="text-sm font-medium">Business Logo</label>
                    <input type="file" id="3" 
                        className="w-full h-9 rounded-lg border-none px-3 py-2 md:text-sm text-[#0a0a0a] shadow-xs font-medium 
                        transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50 
                        flex items-center"
                    />
                    <p className="text-xs text-text-gray -mt-0.5">
                        Your logo will appear on invoices. Square image under 2MB (PNG or JPEG) recommended.
                    </p>
                </div>


                <div className="w-full flex justify-end mt-1">
                    <button className="w-fit flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-4 
                        justify-center rounded-lg h-9 text-sm text-nowrap mb-1">
                        Save Changes
                    </button>
                </div>

            </div>

        </div>
    </>
  )
}

export default BusinessInfoForm;