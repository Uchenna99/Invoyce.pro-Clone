import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const CurrencyDropdownMenu = () => {
    const [selected, setSelected] = useState('Nigerian Naira (₦)');
    const [active, setActive] = useState(false);
    const options = ['Nigerian Naira (₦)', 'Ghanaian Cedi (₵)', 'Kenyan Shilling (KSh)', 'US Dollar ($)'];

  return (
    <>
        <div className="w-fit h-9 rounded-lg border border-border flex items-center justify-between gap-2 px-3 cursor-default relative"
            onClick={()=> setActive(!active)} tabIndex={-1} onBlur={()=> active? setActive(false):null}>

            <p className="text-sm text-text-black">
                {selected}
            </p>
            <ChevronDown size={16} color="#b9b9b9"/>

            <motion.div className="w-full rounded-lg bg-white border border-border flex flex-col absolute top-10 left-0 z-10 p-1"
                initial={{opacity:0, y:-10, pointerEvents:'none'}} animate={active? {opacity:1, y:0, pointerEvents:'auto'}:{}} 
                transition={{duration:0.2, ease:'easeInOut'}} >

                {
                    options.map((option, index)=>(
                        <div className="w-fit h-8 rounded-md flex items-center justify-between gap-2 px-2 hover:bg-accent 
                            transition-all duration-200"
                            onClick={()=> selected !== option? setSelected(option) : null} key={index}>
                            <p className="text-sm text-text-black text-nowrap">
                                {option}
                            </p>
                            { selected === option && <Check size={16} color="#737373"/> }
                            
                        </div>
                    ))
                }

            </motion.div>

        </div>
    </>
  )
}

export default CurrencyDropdownMenu;