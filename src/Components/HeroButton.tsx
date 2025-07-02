
interface Props {
    buttonText: string;
}

const HeroButton = ({ buttonText }:Props) => {
  return (
    <>
        <div className="w-full h-[54px] flex items-center justify-center px-5 border border-[#d1d5db] rounded-xl bg-[#285cb4] cursor-pointer
            hover:bg-[#285cb4]/90 active:bg-[#285cb4]/90 transition-all duration-200">
            <p className="font-[500] text-white text-lg"> {buttonText} </p>
        </div>
    </>
  )
}

export default HeroButton;