import logo from "../assets/Images/logo.svg"



const Footer = () => {
  return (
    <>
        <div className="w-full flex justify-center bg-[#f5f5f5] border-t border-[#e5e5e5]">

            <div className="w-full xl:w-[1280px] h-fit flex max-md:flex-col items-center justify-between gap-6 px-4 py-8">

                <div className="w-fit h-full flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-6" />
                    <p className="text-[#0a0a0a] font-medium">Invoyce</p>
                </div>

                <div className="min-w-fit flex items-center gap-8 text-[#737373] text-sm">
                    <p className="cursor-pointer hover:text-[#285cb4] transition-colors duration-200">Features</p>
                    <p className="cursor-pointer hover:text-[#285cb4] transition-colors duration-200">Pricing</p>
                    <p className="cursor-pointer hover:text-[#285cb4] transition-colors duration-200">Terms</p>
                    <p className="cursor-pointer hover:text-[#285cb4] transition-colors duration-200">Privacy</p>
                </div>

                <div className="w-fit flex items-center text-[#737373] text-sm">
                    <p>© 2025 Invoyce</p>
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer;