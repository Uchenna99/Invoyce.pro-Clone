import workflow from "../assets/Images/workflow-illustration.svg"
import HomeGridCard2 from "./HomeGridCard2";

export interface Card2 {
    heading: string;
    info: string;
}

const HowItWorksSecttion = () => {
    const cardData: Card2[] = [
        {heading:'Create a Professional Invoice', info:"Fill in client details, add line items, set due dates, and customize with your logo to create professional invoices for your clients."},
        {heading:'Send to Your Client', info:"Email the invoice directly to your client with a secure payment link for fast payment acceptance across Africa."},
        {heading:'Get Paid Quickly Online', info:"Clients pay via their preferred method in Nigeria, Ghana, Kenya or other African countries, and you get notified instantly."},
    ];


  return (
    <>
        <div className="w-full h-fit flex justify-center px-4 py-16">

            <div className="w-full xl:w-[1280px] flex flex-col gap-5 items-center">

                <div className="w-full md:w-[690px] h-fit flex flex-col gap-4 items-center">
                    <h2 className="text-3xl text-[#0a0a0a] text-center font-bold">
                        How It Works
                    </h2>
                    <p className=" text-[#737373] text-center">
                        Get started in minutes with our simple, intuitive workflow
                    </p>
                    <img src={workflow} alt="" className="mt-8" />
                </div>


                <div className="w-full h-fit grid gap-8 justify-center row-auto grid-cols-1 md:grid-cols-3 pt-8">
                    {
                        cardData.map((card, index)=>(
                            
                            <HomeGridCard2
                                key={index}
                                heading={card.heading}
                                info={card.info}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    </>
  )
}

export default HowItWorksSecttion