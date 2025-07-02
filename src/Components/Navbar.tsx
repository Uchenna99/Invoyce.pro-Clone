import logo from "../assets/Images/logo.svg"
import NavLink from "./NavLink";


const Navbar = () => {
  return (
    <>
        <div className="w-full h-22 bg-white flex justify-center sticky top-0">

          <div className="w-full sm:w-[1200px] h-full flex justify-between">

            <div className="w-[130px] h-full flex items-center gap-2">
              <img src={logo} alt="logo" />
              <p className="text-xl text-[#101828] font-semibold">Invoyce</p>
            </div>

            <div className="w-fit h-full flex items-center gap-10 pt-2">

              <NavLink linkText="Features" />
              <NavLink linkText="Pricing" />
              <NavLink linkText="FAQ" />

            </div>

            <div className="w-fit h-full flex items-center gap-3">

              <div className="w-fit h-[45px] flex items-center px-4 border border-[#d1d5db] rounded-xl cursor-pointer
                hover:bg-[#737373]/10 transition-all duration-200">
                <p className="font-[500]">Sign In</p>
              </div>

              <div className="w-fit h-[42px] flex items-center px-4 border border-[#d1d5db] rounded-xl bg-[#285cb4] cursor-pointer
                hover:bg-[#285cb4]/90 transition-all duration-200">
                <p className="font-[500] text-white">Get Started Free</p>
              </div>

            </div>

          </div>

        </div>
    </>
  )
}

export default Navbar;