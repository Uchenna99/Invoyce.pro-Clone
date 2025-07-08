interface Props {
    name: string;
    count: number;
    selected: string;
    onClick: (filter: string)=>void;
}

const ItemsCount = ({ name, selected, count, onClick }:Props) => {
  return (
    <>
        <div className={`min-w-fit h-8 flex gap-3.5 items-center border rounded-lg shadow-xs px-3 cursor-default 
            ${selected === name? 'border-transparent bg-[#285cb4] hover:bg-[#285cb4]/90' : 'border-[#e5e5e5] hover:bg-[#f5f5f5]'} 
            transition-all duration-300`}
            onClick={()=> onClick(name)}>

            <p className={`${selected === name? 'text-white' : 'text-[#0a0a0a]'} text-sm font-medium`}>
                {name}
            </p>

            <div className="flex items-center justify-center bg-[#285cb4]/10 px-2 py-0.5 rounded-lg">
                <p className="text-xs text-[#0a0a0a] font-medium">
                    {count}
                </p>
            </div>
        </div>
    </>
  )
}

export default ItemsCount;