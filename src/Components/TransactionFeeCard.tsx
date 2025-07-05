import { Check } from "lucide-react"
import TextBox from "./TextBox"
import HeroButton from "./HeroButton"



const TransactionFeeCard = () => {
  return (
    <>
        <div className="w-full card:w-[770px] h-fit bg-white rounded-lg shadow-sm flex flex-col items-center mt-7">

            <div className="w-full h-fit flex flex-col border-b border-[#e5e5e5] items-center p-6 gap-1">

                <div className="w-10 h-10 rounded-full bg-[#285cb4]/10 flex items-center justify-center mb-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="#285cb4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>

                <h2 className="text-[#0a0a0a] text-2xl font-bold">
                    1<span className="text-[#285cb4]">%</span> Transaction Fee
                </h2>

                <p className="text-[#737373]">
                    Pay only when you get paid
                </p>
            </div>
            

            <div className="w-full h-fit p-6 flex flex-col">

                <div className="w-full h-fit flex flex-col items-center gap-10 pt-5 pb-6 border-b border-[#e5e5e5]">

                    <div className="w-full grid grid-cols-3 gap-5">

                        <div className="flex flex-col items-center">
                            <p className="text-xs text-[#737373]">
                                Invoice Amount
                            </p>
                            <p className="text-[#0a0a0a] text-lg font-semibold">
                                ₦100,000
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <TextBox texts="1% Fee" colorSelect="secondary" fontSize="smaller" />
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-xs text-[#737373]">
                                You Pay
                            </p>
                            <p className="text-[#285cb4] text-lg font-semibold">
                                ₦1,000
                            </p>
                        </div>

                    </div>

                    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="flex md:justify-center">
                            <div className="w-fit h-fit flex flex-col gap-2 text-[#0a0a0a]">
                                <p className="font-medium mb-1">
                                    Everything Included:
                                </p>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Unlimited professional invoices</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Custom branding & templates</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Automatic payment reminders</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Client trust metrics</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex md:justify-center">
                            <div className="w-fit h-fit flex flex-col gap-2 text-[#0a0a0a]">
                                <p className="font-medium mb-1">
                                    Also Included:
                                </p>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Multi-currency support</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Advanced dashboard analytics</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Paystack payment integration</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check size={16} color="#285cb4" />
                                    <p className="text-sm">Priority support</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-full h-fit flex flex-col items-center gap-3 pt-4">

                    <div className="w-fit flex">
                        <HeroButton 
                            buttonText="Get Started"
                        />
                    </div>
                    <p className="text-xs text-[#737373]">
                        No credit card required • No hidden fees
                    </p>
                </div>

            </div>

        </div>
    </>
  )
}

export default TransactionFeeCard