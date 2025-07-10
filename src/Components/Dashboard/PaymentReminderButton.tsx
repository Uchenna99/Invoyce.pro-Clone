import { useState } from "react";

interface Props {
    label: string;
    active : boolean;
}

const PaymentReminderButton = ({ label, active }:Props) => {
    const [selected, setSelected] = useState(active);
  return (
    <>
        <button className={`w-fit flex items-center font-medium px-3 border 
            justify-center rounded-lg h-8 text-xs text-nowrap mb-1 transition-all duration-200 
            ${selected? 'bg-primary hover:bg-primary/90 text-white border-transparent' : 
            'text-text-black border-border hover:bg-accent'}`}
            onClick={()=> setSelected(!selected)}>
            {label}
        </button>
    </>
  )
}

export default PaymentReminderButton;