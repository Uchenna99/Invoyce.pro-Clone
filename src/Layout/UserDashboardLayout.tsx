



const UserDashboardLayout = () => {
  return (
    <>
        <div className="w-full h-screen min-h-screen flex flex-row bg-white">

            <div className="w-[255px] h-full border-r border-[#e5e5e5] hidden lg:flex flex-col transition-all duration-300">

                <div className="w-full h-16 border-b border-[#e5e5e5]"></div>

                <div className="w-full h-[calc(100%-64px)] flex flex-col justify-between p-4">

                    <div className="w-full h-15 flex flex-col gap-1"></div>

                    <div className="w-full h-14 bg-amber-100 flex border-t border-[#e5e5e5]"></div>

                </div>

            </div>



            <div className="w-full lg:w-[calc(100%-255px)] h-full flex flex-col transition-all duration-300">

                <div className="w-full h-16 flex border-b border-[#e5e5e5]"></div>

            </div>

        </div>
    </>
  )
}

export default UserDashboardLayout;