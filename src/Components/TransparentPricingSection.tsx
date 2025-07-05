import TextBox from "./TextBox";
import TransactionFeeCard from "./TransactionFeeCard";



const TransparentPricingSection = () => {
  return (
    <>
        <div className="w-full h-fit flex justify-center bg-[#f5f5f5] px-4 py-16">

            <div className="w-full xl:w-[1280px] flex flex-col gap-5 items-center">

                <TextBox texts="Transparent Pricing" colorScheme="primary" fontSize="small" />

                <div className="w-full h-fit flex flex-col gap-5 items-center">
                    <h2 className="text-3xl text-[#0a0a0a] text-center font-bold">
                        Free Invoice Generator with Pay-As-You-Go Pricing
                    </h2>
                    <p className="text-[#737373] text-center">
                        Create unlimited invoices with no subscription - pay only 1% when you get paid
                    </p>
                </div>

                <TransactionFeeCard/>

            </div>

        </div>
    </>
  )
}

export default TransparentPricingSection;