import HomeGridCard1 from "./HomeGridCard1"
import TextBox from "./TextBox"



const CreateSendTrackInvoices = () => {
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


            <div className="w-full h-fit grid gap-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 card-grid">
                <HomeGridCard1/>
                <HomeGridCard1/>
                <HomeGridCard1/>
                <HomeGridCard1/>
            </div>

        </div>
    </>
  )
}

export default CreateSendTrackInvoices