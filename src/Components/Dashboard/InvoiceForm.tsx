import { Calendar } from "lucide-react";
import PaymentReminderButton from "./PaymentReminderButton";


const InvoiceForm = () => {
  return (
    <>
        <div className="w-full border border-border rounded-xl shadow shadow-shadow px-6 py-5 flex flex-col gap-5">

            <div className="flex flex-col">
                <p className="font-semibold text-text-black mb-[2px]">Invoice Settings</p>
                <p className="text-text-gray text-sm">
                    Configure default invoice settings and payment preferences
                </p>
            </div>


            <div className="w-full flex gap-4">

                <div className="flex flex-col gap-[6px] w-1/2">
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

                <div className="flex flex-col gap-[6px] w-1/2">
                    <label htmlFor="" className="text-sm font-medium">Payment Reminder Days</label>
                    <div className="flex items-center gap-2 flex-wrap">
                        <PaymentReminderButton label="3 days before" active/>
                    </div>
                    <p className="text-[0.8rem] text-text-gray mt-[2px]">
                        Select when to send payment reminders relative to due date
                    </p>
                </div>

            </div>

        </div>
    </>
  )
}

export default InvoiceForm;