

interface Props {
    texts: string;
}

const TextBox = ({ texts }:Props) => {
  return (
    <>
        <div className="w-fit h-7 flex items-center bg-[#e9eef7] px-3 rounded-2xl">
            <p className="text-[#285cb4] text-sm font-medium">
                {texts}
            </p>
        </div>
    </>
  )
}

export default TextBox;