import { useState } from "react";

interface Props {
    label: string;
    active: boolean;
}

const PaymentReminderButton = ({ label, active }:Props) => {
    const [selected, setSelected] = useState(active);
  return (
    <>
        <button className="w-fit flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-3 
            justify-center rounded-lg h-8 text-xs text-nowrap mb-1"
            onClick={()=> setSelected(!selected)}>
            {label}
        </button>
    </>
  )
}

export default PaymentReminderButton;