import { useState } from "react";
import ProfileForm from "../Components/Dashboard/ProfileForm";


const UserSettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');
  const tabs = ['Profile', 'Business', 'Invoice', 'Payouts'];
  
  return (
    <>
        <div className="w-full h-fit flex flex-col max-lg:pb-20 py-4 gap-6 ">

          <div className="flex flex-col">
              <h2 className="text-[#0a0a0a] text-2xl font-bold tracking-tight">
                  Settings
              </h2>
              <p className="text-[#737373]">
                  Manage your account and payment preferences
              </p>
          </div>


          <div className="w-fit min-w-fit h-9 flex rounded-lg bg-accent p-1 gap-0.5">
            {
              tabs.map((tab, index)=>(
                <div className={`w-fit px-2 h-full rounded-lg flex items-center justify-center cursor-default transition-all duration-200 
                  ${selectedTab === tab? 'bg-white shadow-sm':'bg-transparent'}`}
                  key={index} onClick={()=> setSelectedTab(tab)}>
                  <p className="text-sm font-medium">{tab}</p>
                </div>

              ))
            }
          </div>


          {
            selectedTab === 'Profile'?
            <ProfileForm/>
            :
            null
          }

        </div>
    </>
  )
}

export default UserSettingsPage;