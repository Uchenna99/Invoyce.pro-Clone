import { Check, ChevronDown, Globe, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    name: string;
    list: string[];
    flag?: boolean;
}

const SelectorWithSearch = ({ name, list, flag }:Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState('');
    const [active, setActive] = useState(false);
    const [dropList, setDropList] = useState<string[]>(list);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        if(!search) {
            if(dropList !== list) { setDropList(list) }
        }else {
            const newList = list.filter((item)=> item.toLowerCase().includes(search.toLocaleLowerCase()));
            setDropList(newList);
        }
    },[search]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if ( dropdownRef.current && !dropdownRef.current.contains(event.target as Node) ) {
            setActive(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <>
        <div className="w-full h-fit flex flex-col gap-[6px] relative" ref={dropdownRef}>

            <p className="text-sm font-medium flex"> {name} </p>

            <div className={`w-full h-10 px-3 border border-border rounded-lg hover:bg-accent transition-all duration-100 relative 
                flex items-center justify-between cursor-pointer ${active? 'ring-2 ring-primary':''}`}
                onClick={()=>{ setActive(!active) }}>

                {
                    !selected?
                    <p className="text-text-gray">Select {name}</p>
                    :
                    <p className="text-text-black flex items-center gap-2">
                        { flag && <Globe size={16}/> }
                        {selected}
                    </p>
                }

                <div className="flex items-center text-text-gray gap-2">
                    <ChevronDown size={12} className={`${active? 'rotate-180':''} transition-all duration-200`} />
                </div>

            </div>

            {
                selected && 
                <X size={12} color="#737373" 
                    className="absolute right-9 bottom-[14px]"
                    onClick={()=>setSelected('')}
                />
            }


            <motion.div className="w-full h-fit flex flex-col gap-1 pb-1 border border-border rounded-lg overflow-hidden 
                bg-white shadow-md absolute z-20 top-18" 
                initial={{opacity:0, pointerEvents:'none'}} animate={active? {opacity:1, pointerEvents:'auto'}:{}} transition={{duration:0.1}} >
                
                <div className="w-full flex items-center p-[10px] relative border-b border-border">
                    <Search size={16} color="#737373" className="absolute left-5"/>
                    <input type="text" placeholder="Search..."
                        className="w-full h-8 border-none outline-none ring-2 ring-primary/50 rounded-lg pl-8 pr-2 text-sm"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>

                <div className="w-full h-fit max-h-50 overflow-y-auto">
                    {
                        dropList.length > 0?
                        dropList.map((item, index)=>(

                            <div className="w-full h-9 px-3 flex items-center justify-between hover:bg-accent transition-all duration-200 
                                cursor-default" key={index} 
                                onClick={()=>{ setSelected(item); setActive(false) }}>
                                <div className="flex items-center gap-2">
                                    { flag && <Globe size={16} color="#737373"/> }
                                    <p className="text-text-black">
                                        {item}
                                    </p>
                                </div>
                                { item === selected && <Check size={16} color="#285cb4"/> }
                            </div>
                        ))
                        :
                        <div className="w-full h-9 px-3 flex items-center transition-all duration-200">
                            <p className="text-sm text-text-gray">No options found</p>
                        </div>
                    }
                </div>

            </motion.div>

        </div>
    </>
  )
}

export default SelectorWithSearch;