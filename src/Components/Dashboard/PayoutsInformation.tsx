import { Banknote, Bell, Calendar, Wallet } from "lucide-react";


const PayoutsInformation = () => {
  return (
    <>
        <div className="w-full border border-border rounded-xl shadow shadow-shadow pb-5 flex flex-col gap-6">
            <div className="w-full flex flex-col pr-8 pl-6 py-5 gap-6">

                <div className="flex flex-col">
                    <p className="font-semibold text-text-black mb-[2px]">Getting Your Money</p>
                    <p className="text-text-gray text-sm">
                        How payments flow through our Paystack integration directly to your bank account
                    </p>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p className="font-medium text-text-black text-lg mb-[2px]">How Payments Flow to You</p>
                    <p className="text-text-gray">
                        Invoyce is a registered Paystack business account holder, and you're set up as a subaccount under our main account. 
                        When your client pays an invoice, the payment is automatically split:
                    </p>
                </div>

                <div className="flex flex-col gap-11 pl-4 mt-1">
                    <div className="flex items-center gap-3">
                        <Wallet size={20} color="#285cb4" className="min-w-5"/>
                        <p className="text-sm text-text-black">
                            <span className="font-bold">
                                99% goes directly to your bank account
                            </span> as a subaccount, while Invoyce receives the 1% transaction fee. You don't need to withdraw funds or 
                            transfer anything—the money is automatically sent to your bank.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="#285cb4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="font-medium">Paystack Processing Fees</p>
                        </div>
                        <p className="text-text-gray text-sm">
                            Paystack, our payment processor, charges standard transaction fees (typically 1.5% + ₦100, capped at ₦2000 in 
                            Nigeria). These fees are deducted before the funds reach your account. This is standard industry practice and 
                            applies to all payment processors.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] mt-4">
                    <p className="font-medium text-text-black text-lg mb-[2px]">Your Paystack Subaccount</p>
                    <p className="text-text-gray">
                        When you sign up with Invoyce, we create a Paystack subaccount linked to our main business account. This subaccount 
                        is configured with your bank details to ensure payments go directly to you. Here's what that means:
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-11 pl-4 mt-1">
                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <div className="flex items-center gap-2">
                            <Banknote size={16} color="#285cb4"/>
                            <p className="font-medium">First Payment Verification</p>
                        </div>
                        <p className="text-text-gray text-sm">
                            When you receive your first payment, Paystack will verify your bank account. This happens only once, and we'll 
                            notify you if there are any issues. After verification, all future payments will be processed automatically.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} color="#285cb4"/>
                            <p className="font-medium">Payment Schedule</p>
                        </div>
                        <p className="text-text-gray text-sm">
                            Payments typically arrive in your bank account within 1-2 business days after your client pays. This process is 
                            handled directly by Paystack based on their settlement schedule for your country.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] mt-4">
                    <p className="font-medium text-text-black text-lg mb-[2px]">Bank Account Requirements</p>
                    <p className="text-text-gray">
                        As a subaccount under Invoyce's main Paystack account, your bank account must meet these requirements:
                    </p>
                </div>

                <div className="w-full text-text-black grid grid-cols-[100px_1fr] sm:grid-cols-[1fr_3fr] auto-rows-min -mt-3">
                    <div className="flex items-center pl-3 border-b border-border p-2"><p className="text-sm font-medium">Country</p></div>
                    <div className="flex items-center border-b border-border py-2"><p className="text-sm font-medium">Requirements</p></div>
                    <div className="flex items-center pl-3 border-b border-border p-2"><p className="text-sm">Nigeria</p></div>
                    <div className="flex items-center border-b border-border py-2"><p className="text-sm">Personal bank account matching your BVN details</p></div>
                    <div className="flex items-center pl-3 border-b border-border p-2"><p className="text-sm">Ghana</p></div>
                    <div className="flex items-center border-b border-border py-2"><p className="text-sm">Personal account or mobile money (MoMo) number</p></div>
                    <div className="flex items-center pl-3 border-b border-border p-2"><p className="text-sm">Kenya</p></div>
                    <div className="flex items-center border-b border-border py-2"><p className="text-sm">Personal account matching your ID details</p></div>
                    <div className="flex items-center pl-3 p-2"><p className="text-sm">South Africa</p></div>
                    <div className="flex items-center py-2"><p className="text-sm">Personal bank account with bank confirmation letter</p></div>
                </div>
                <p className="text-text-gray text-sm italic -mt-3">
                    Note: Your bank account details must match the identity information in your Invoyce profile.
                </p>

                <div className="flex flex-col gap-[10px]">
                    <p className="font-medium text-text-black text-lg mb-[2px]">Updating Your Bank Account</p>
                    <p className="text-text-gray">
                        Since your bank account is configured through our Paystack integration, you'll need to contact our support team to 
                        update your banking information. We'll update your subaccount settings on your behalf.
                    </p>
                </div>

                <div className="flex flex-col gap-2 pl-4">
                    <p className="font-medium">
                        What happens when you update your bank details: 
                    </p>
                    <ol className="list-decimal pl-6 text-sm text-text-gray space-y-1">
                        <li>We'll update your subaccount information with Paystack</li>
                        <li>Your next payout will require verification again</li>
                        <li>Once verified, all future payments will go to your new account</li>
                    </ol>
                </div>

                <div className="flex flex-col gap-[10px] mt-3">
                    <p className="font-medium text-text-black text-lg mb-[2px]">Payment Processing</p>
                    <p className="text-text-gray">
                        Our payment system is designed to make receiving payments as seamless as possible for freelancers. Here's what you need to know:
                    </p>
                </div>

                <div className="flex flex-col gap-3 pl-4">
                    <div className="flex flex-col gap-1">
                        <p className="font-medium">Fast Settlement</p>
                        <p className="text-text-gray text-sm">
                            Funds typically arrive in your account within 1-2 business days after your client makes a payment.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium">Multiple Payment Methods</p>
                        <p className="text-text-gray text-sm">
                            Your clients can pay via card, bank transfer, USSD, or mobile money depending on their location.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium">Direct to Your Account</p>
                        <p className="text-text-gray text-sm">
                            Payments go directly to your bank account—no need to manually withdraw funds.
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex px-6">
            <div className="w-full border border-border rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Bell size={20} color="#285cb4"/>
                    <p className="font-medium text-text-black text-lg">Need Help?</p>
                </div>
                <p className="text-text-gray">
                    If you have any questions about how the Paystack subaccount system works, issues with receiving funds, or need to update your bank information, our support team is ready to assist you.
                </p>
                <div className="w-fit h-8 border border-border rounded-lg flex items-center justify-center px-3">
                    <p className="text-text-black font-medium text-sm">Contact Support</p>
                </div>
            </div>
            </div>

        </div>
    </>
  )
}

export default PayoutsInformation;