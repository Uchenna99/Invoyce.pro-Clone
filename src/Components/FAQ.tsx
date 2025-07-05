import FaqCard, { type Faq } from "./FaqCard";
import TextBox from "./TextBox";



const FAQ = () => {
    const cardData: Faq[] = [
        {question:'Do my clients need to create an account?', answer:"No, your clients don't need to sign up. They'll receive an invoice via email with a secure payment link where they can complete the payment without creating an account."},
        {question:'Which payment methods are supported?', answer:"Invoyce integrates with Paystack to offer various payment methods including credit/debit cards, bank transfers, USSD, and mobile money options in supported countries."},
        {question:'How does your pricing work?', answer:"We charge a simple 1% transaction fee on successful payments. For example, if your client pays an invoice of ₦100,000, we charge just ₦1,000. You only pay when you get paid - no subscription fees or hidden costs."},
        {question:'Which currencies are supported?', answer:"Currently, we support Nigerian Naira (NGN), Ghanaian Cedi (GHS), Kenyan Shilling (KES), and US Dollar (USD). We're working to add more currencies soon."},
        {question:'How does the client trust system work?', answer:"Our system automatically tracks payment history for each client, including metrics like on-time payments and average days late. This helps you identify reliable clients and make informed decisions."},
        {question:'Can I customize my invoices?', answer:"Yes! You can add your logo, business details, and customize invoice notes. You also get access to multiple templates and branding options to match your business identity."},
    ];

  return (
    <>
        <div className="w-full xl:w-[1280px] h-fit flex justify-center px-4 py-16">

            <div className="w-full flex flex-col gap-5 items-center">

                <div className="w-full md:w-[690px] h-fit flex flex-col gap-4 items-center">
                    <TextBox
                        texts="FAQ"
                        colorSelect="primary"
                        fontSize="small"
                    />
                    <h2 className="text-3xl text-[#0a0a0a] text-center font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className=" text-[#737373] text-center">
                        Common questions about creating and sending invoices with Invoyce
                    </p>
                </div>


                <div className="w-full h-fit grid gap-6 justify-center row-auto grid-cols-1 md:grid-cols-2 pt-8">

                    {
                        cardData.map((card, index)=>(

                            <FaqCard 
                                key={index}
                                question={card.question}
                                answer={card.answer}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    </>
  )
}

export default FAQ;