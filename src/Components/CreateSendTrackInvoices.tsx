import HomeGridCard1, { type Card1 } from "./HomeGridCard1"
import TextBox from "./TextBox"
import invoice from "../assets/Images/invoice.svg"
import card from "../assets/Images/card.svg"
import bell from "../assets/Images/bell.svg"
import people from "../assets/Images/2people.svg"
import bars from "../assets/Images/bars.svg"



const CreateSendTrackInvoices = () => {
    const cardData: Card1[] = [
        {icon: invoice, heading:'Professional Invoice Generator', info:"Create branded invoices in seconds with your logo and business details for clients in Africa and worldwide."},
        {icon: card, heading:'Get Paid Online Easily', info:"Accept payments with Paystack via card, bank transfer, USSD, or mobile money in Nigeria, Ghana, and Kenya."},
        {icon: bell, heading:'Automatic Payment Reminders', info:"Send payment reminders automatically to reduce late payments and improve your cashflow as a freelancer."},
        {icon: people, heading:'Client Trust Metrics', info:"Track payment habits and build trust with reliable clients to grow your freelance business in Africa."},
        {icon: bars, heading:'Freelance Business Analytics', info:"Get insights into your revenue, outstanding payments, and client metrics to make better business decisions."},
        {icon: card, heading:'Multi-Currency Invoicing', info:"Support for NGN, GHS, KES, and USD to serve clients across Africa and worldwide with transparent pricing."}
    ];
  return (
    <>
        <div className="w-full h-fit flex flex-col gap-5 items-center bg-[#f5f5f5] px-4 py-22">

            <TextBox texts="Features" />

            <div className="w-full md:w-[690px] h-fit flex flex-col gap-5 items-center">
                <h2 className="text-4xl text-[#0a0a0a] text-center font-bold">
                    Create, Send & Track Invoices Easily
                </h2>
                <p className="text-lg text-[#737373] text-center">
                    Invoyce provides all the tools you need to generate professional invoices, send payment requests, 
                    and get paid online - optimized for freelancers in Africa.
                </p>
            </div>


            <div className="w-full h-fit grid gap-10 justify-center row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 card-grid">
                {
                    cardData.map((card, index)=>(
                        
                        <HomeGridCard1
                        key={index}
                            icon={card.icon}
                            heading={card.heading}
                            info={card.info}
                        />
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default CreateSendTrackInvoices