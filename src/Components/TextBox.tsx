

interface Props {
    texts: string;
    colorScheme: "primary" | "secondary";
    fontSize: "small" | "smaller";
}

const TextBox = ({ texts, colorScheme, fontSize }:Props) => {
  return (
    <>
        <div className={`w-fit h-7 flex items-center bg-[${colorScheme === 'primary'? '#e9eef7':'#f5f5f5'}] px-3 rounded-2xl`}>
            <p className={`text-[${colorScheme === 'primary'? '#285cb4': '#737373'}] font-medium 
              ${fontSize === "small"? 'text-sm':'text-xs'}`}>
              {texts}
            </p>
        </div>
    </>
  )
}

export default TextBox;