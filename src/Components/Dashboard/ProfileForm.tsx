import { Mail, Phone, User } from "lucide-react";


const ProfileForm = () => {
  return (
    <>
        <div className="w-full border border-border rounded-xl shadow shadow-shadow px-6 py-5 flex flex-col gap-5">

            <div className="flex flex-col">
                <p className="font-semibold text-text-black mb-[2px]">Personal Information</p>
                <p className="text-text-gray text-sm">
                    Update your personal details and contact information
                </p>
            </div>


            <div className="w-full flex flex-col gap-4">

                <div className="w-full flex gap-5">

                    <div className="flex flex-col gap-[6px] flex-1">
                        <label htmlFor="1" className="text-sm font-medium">First name</label>
                        <div className="flex items-center relative">
                            <User size={16} color="#99a1af" className="absolute left-3"/>
                            <input type="text" id="1"
                                className="w-full h-9 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                                transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1">
                        <label htmlFor="2" className="text-sm font-medium">Last name</label>
                        <div className="flex items-center relative">
                            <User size={16} color="#99a1af" className="absolute left-3"/>
                            <input type="text" id="2"
                                className="w-full h-9 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                                transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                            />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="3" className="text-sm font-medium">Email address</label>
                    <div className="flex items-center relative">
                        <Mail size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="3"
                            className="w-full h-9 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                    <label htmlFor="4" className="text-sm font-medium">Phone number</label>
                    <div className="flex items-center relative">
                        <Phone size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="text" id="4"
                            className="w-full h-9 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] placeholder-[#737373] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                </div>

            </div>


            <div className="w-full flex justify-end">
                <button className="w-fit flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-4 
                    justify-center rounded-lg h-9 text-sm text-nowrap mb-1">
                    Save Changes
                </button>
            </div>
            
        </div>
    </>
  )
}

export default ProfileForm;