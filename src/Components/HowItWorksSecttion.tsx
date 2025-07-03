


const HowItWorksSecttion = () => {
  return (
    <>
        <div className="w-full h-fit flex justify-center bg-[#f5f5f5] px-4 py-22">

            <div className="w-full xl:w-[1275px] flex flex-col gap-5 items-center">

                <div className="w-full md:w-[690px] h-fit flex flex-col gap-5 items-center">
                    <h2 className="text-4xl text-[#0a0a0a] text-center font-bold">
                        Create, Send & Track Invoices Easily
                    </h2>
                    <p className="text-lg text-[#737373] text-center">
                        Invoyce provides all the tools you need to generate professional invoices, send payment requests, 
                        and get paid online - optimized for freelancers in Africa.
                    </p>
                </div>


                <div className="w-full h-fit grid gap-8 justify-center row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
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

        </div>
    </>
  )
}

export default HowItWorksSecttion