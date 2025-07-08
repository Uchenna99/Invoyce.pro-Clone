import TabBarCell from "./TabBarCell";


interface Props {
    currentSection: string;
}

const TabBar = ({ currentSection }:Props) => {
  return (
    <>
        <div className="w-full h-16 flex justify-around border-t border-[#e5e5e5] transition-all duration-300 bg-white 
            fixed bottom-0 left-0 z-50 lg:hidden">

            <TabBarCell
                name="Dashboard"
                currentSection={currentSection}
            />

        </div>
    </>
  )
}

export default TabBar;