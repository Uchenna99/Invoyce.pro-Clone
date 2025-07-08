import logo from "../assets/Images/logo.svg"
import NavLink from "./NavLink";
import burger from "../assets/Images/burger.svg"
import close from "../assets/Images/close.svg"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 20;

      if (scrollPosition > triggerPoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <div className={`w-full h-22 bg-white flex justify-center fixed top-0 left-0 z-50 px-4 ${scrolled? 'shadow-sm':''} 
          transition-all duration-300`}>

          <div className="w-full xl:w-[1250px] h-full flex justify-between items-center">

            <div className="w-[125px] h-full flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
              <img src={logo} alt="logo" className="w-9" />
              <p className="text-xl text-[#0a0a0a] font-semibold tracking-tight">Invoyce</p>
            </div>


            <div className="w-fit h-full hidden md:flex items-center gap-10">

              <NavLink linkText="Features" onLinkClick={()=>{}} />
              <NavLink linkText="Pricing" onLinkClick={()=>{}} />
              <NavLink linkText="FAQ" onLinkClick={()=>{}} />

            </div>


            <div className="w-fit h-full hidden md:flex items-center gap-3">

              <div className="w-fit h-[42px] flex items-center px-4 border border-[#e5e5e5] rounded-xl cursor-pointer
                hover:bg-[#737373]/10 transition-all duration-200 active:bg-[#737373]/10"
                onClick={()=> navigate('/dashboard')}>
                <p className="font-[500]">Sign In</p>
              </div>

              <div className="w-fit h-[42px] flex items-center px-4 border border-[#d1d5db] rounded-xl bg-[#285cb4] cursor-pointer
                hover:bg-[#285cb4]/90 active:bg-[#285cb4]/90 transition-all duration-200">
                <p className="font-[500] text-white">Get Started Free</p>
              </div>

            </div>


            <div className="w-fit h-fit flex md:hidden cursor-pointer pr-1" onClick={()=> setOpenMenu(!openMenu)}>
              {
                !openMenu &&
                <img src={burger} alt="" />
              }
              {
                openMenu &&
                <img src={close} alt="" />
              }
            </div>

          </div>

        </div>


        <motion.div className={`w-full h-fit flex flex-col md:hidden gap-3 fixed top-22 left-0 z-40 bg-white p-5 shadow-lg 
          ${openMenu? '':'pointer-events-none'}`}
          initial={{opacity:0, y:-200}} animate={openMenu? {opacity:1, y:0}:{}} transition={{duration:0.2, ease:'easeInOut'}} >

          <div className="w-full h-fit flex flex-col gap-5 border-b border-[#e6e6e6] pb-5">

            <div className="w-full h-8 flex items-center px-4 rounded-lg active:bg-[#737373]/10">
              <p className="text-sm text-[#0a0a0a] font-medium">Features</p>
            </div>
            <div className="w-full h-7 flex items-center px-4 rounded-lg active:bg-[#737373]/10">
              <p className="text-sm text-[#0a0a0a] font-medium">Pricing</p>
            </div>
            <div className="w-full h-7 flex items-center px-4 rounded-lg active:bg-[#737373]/10">
              <p className="text-sm text-[#0a0a0a] font-medium">FAQ</p>
            </div>

          </div>


          <div className="w-full h-10 border border-[#e5e5e5] rounded-xl flex items-center justify-center active:bg-[#737373]/10 mt-1">
            <p className="text-[#0a0a0a] font-medium">Sign In</p>
          </div>

          <div className="w-full h-10 bg-[#285cb4] rounded-xl flex items-center justify-center active:bg-[#285cb4]/90">
            <p className="text-white font-medium">Get Started Free</p>
          </div>

        </motion.div>
    </>
  )
}

export default Navbar;