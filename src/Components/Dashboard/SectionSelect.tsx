import { LayoutDashboard } from "lucide-react";

interface Props {
    name: string;
    state: 'null' | 'hover' | 'active';
}

const SectionSelect = ({ name, state }:Props) => {
    const colors = {null: '#4a5565', hover: '#0a0a0a', active: '#285cb4'};
    const bgColors = {hover: '#f5f5f5', active: '#285bb41a'};


  return (
    <>
        <div className={`w-full h-10 flex items-center px-4 
            ${state === 'hover'? bgColors.hover : state === 'active'? bgColors.active : ''}`}>

            <LayoutDashboard 
                size={20} 
                color={
                    state === 'hover'? colors.hover :
                    state === 'active'? colors.active : ''
                }
            />

            <p className="font-medium">
                {name}
            </p>

        </div>
    </>
  )
}

export default SectionSelect;