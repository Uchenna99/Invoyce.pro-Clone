import { motion } from "framer-motion";

interface Props {
    toggle: boolean;
    change: ()=>void;
    activeToggle: boolean;
}

const ToggleButton = ({ toggle, change, activeToggle }:Props) => {
    
  return (
    <>
        <button role="switch" className={`${activeToggle? '':'cursor-not-allowed'}`} onClick={change}>
            <div className={`w-8 h-[18px] rounded-xl flex items-center px-[1px] relative 
                ${toggle? 'bg-primary' : 'bg-border'} 
                ${activeToggle? '':'bg-primary/50'}`}>
                <motion.div className="bg-white w-4 h-4 rounded-full absolute"
                initial={{right:1}} animate={toggle? {}:{left:1}} transition={{duration:0.1, ease:'easeInOut'}} ></motion.div>
            </div>
        </button>
    </>
  )
}

export default ToggleButton;