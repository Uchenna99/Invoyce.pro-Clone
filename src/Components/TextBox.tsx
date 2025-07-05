

interface Props {
    texts: string;
    colorSelect: "primary" | "secondary";
    fontSize: "small" | "smaller";
}

const TextBox = ({ texts, colorSelect, fontSize }:Props) => {
  return (
    <>
        <div className={`w-fit h-7 flex items-center ${colorSelect === 'primary'? 'bg-[#285cb4]/10':'bg-[#f5f5f5]'} px-3 rounded-2xl`}>
            <p className={`text-[${colorSelect === 'primary'? '#285cb4': '#737373'}] font-medium 
              ${fontSize === "small"? 'text-sm':'text-xs'}`}>
              {texts}
            </p>
        </div>
    </>
  )
}

export default TextBox;