import { Calendar } from "lucide-react";
import PaymentReminderButton from "./PaymentReminderButton";
import ToggleButton from "./ToggleButton";
import { useState } from "react";


const InvoiceForm = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <>
        <div className="w-full border border-border rounded-xl shadow shadow-shadow px-6 py-5 flex flex-col gap-5">

            <div className="flex flex-col">
                <p className="font-semibold text-text-black mb-[2px]">Invoice Settings</p>
                <p className="text-text-gray text-sm">
                    Configure default invoice settings and payment preferences
                </p>
            </div>


            <div className="w-full flex flex-col md:flex-row gap-4">

                <div className="flex flex-col gap-[6px] w-full md:w-1/2">
                    <label htmlFor="1" className="text-sm font-medium">Default Due Date (Days)</label>
                    <div className="flex items-center relative">
                        <Calendar size={16} color="#99a1af" className="absolute left-3"/>
                        <input type="number" id="1"
                            className="w-full h-10 rounded-lg border-none pl-9 pr-4 md:text-sm text-[#0a0a0a] shadow-xs 
                            transition-all duration-300 outline outline-[#e5e5e5] focus:outline-[#285cb4] focus:ring-4 focus:ring-[#285cb4]/50"
                        />
                    </div>
                    <p className="text-[0.8rem] text-text-gray mt-[2px]">
                        Number of days after invoice date when payment is due
                    </p>
                </div>

                <div className="flex flex-col gap-[6px] w-full md:w-1/2">
                    <label htmlFor="" className="text-sm font-medium">Payment Reminder Days</label>
                    <div className="flex items-center gap-2 flex-wrap">
                        <PaymentReminderButton active={false} label="3 days before" />
                        <PaymentReminderButton active={false} label="1 day before" />
                        <PaymentReminderButton active label="On due date" />
                        <PaymentReminderButton active label="1 day after" />
                        <PaymentReminderButton active label="3 days after" />
                        <PaymentReminderButton active={false} label="5 days after" />
                        <PaymentReminderButton active={false} label="7 days after" />
                    </div>
                    <p className="text-[0.8rem] text-text-gray mt-[2px]">
                        Select when to send payment reminders relative to due date
                    </p>
                </div>

            </div>


            <div className="w-full flex justify-between items-center gap-2">

                <div className="flex flex-col cursor-pointer" onClick={()=> setToggle(!toggle)}>
                    <p className="text-sm font-medium">Automatic Reminders</p>
                    <p className="text-[0.8rem] text-text-gray font-medium -mt-0.5">
                        Send automatic email reminders for invoices
                    </p>
                </div>

                <ToggleButton toggle={toggle} change={()=> setToggle(!toggle)} />
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

export default InvoiceForm;