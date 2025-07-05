import FaqCard from "./FaqCard";
import TextBox from "./TextBox";



const FAQ = () => {
  return (
    <>
        <div className="w-full h-fit flex justify-center px-4 py-16">

            <div className="w-full xl:w-[1275px] flex flex-col gap-5 items-center">

                <div className="w-full md:w-[690px] h-fit flex flex-col gap-4 items-center">
                    <TextBox
                        texts="FAQ"
                        colorScheme="primary"
                        fontSize="small"
                    />
                    <h2 className="text-3xl text-[#0a0a0a] text-center font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className=" text-[#737373] text-center">
                        Common questions about creating and sending invoices with Invoyce
                    </p>
                </div>


                <div className="w-full h-fit grid gap-8 justify-center row-auto grid-cols-1 md:grid-cols-3 pt-8">

                    <FaqCard 
                        question="Do my clients need to create an account?"
                        answer="No, your clients don't need to sign up. They'll receive an invoice via email with a secure payment link where they can complete the payment without creating an account."
                    />
                    <FaqCard 
                        question="Do my clients need to create an account?"
                        answer="No, your clients don't need to sign up. They'll receive an invoice via email with a secure payment link where they can complete the payment without creating an account."
                    />
                    
                </div>

            </div>

        </div>
    </>
  )
}

export default FAQ;