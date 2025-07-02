import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
    linkText: string;
    onLinkClick: ()=>void;
}

const NavLink = ({ linkText, onLinkClick }: Props) => {
    const [highlight, setHighlight] = useState(false);

  return (
    <>
        <div className="w-fit h-fit flex flex-col gap-1 px-1 cursor-pointer"
            onMouseEnter={()=> setHighlight(true)} onMouseLeave={()=> setHighlight(false)}
            onClick={onLinkClick}>

            <p className={`text-[${highlight? '#101828':'#737373'}] text-sm font-[500] transition-all duration-200`}> 
                {linkText} 
            </p>

            <motion.div className="h-[3px] min-h-[3px] bg-[#285cb4]" 
                initial={{width:0}} animate={highlight? {width:'100%'}:{}} transition={{duration:0.3, ease:'easeOut'}}
            />
        </div>
    </>
  )
}

export default NavLink;