

export interface Faq {
    question: string;
    answer: string;
}

const FaqCard = ({ question, answer }:Faq) => {
  return (
    <>
        <div className="flex gap-3 p-6 rounded-lg border border-[#e5e5e5] shadow-sm hover:shadow-md 
            transition-all duration-300">

            <div className="min-w-8">
                <div className="min-w-8 min-h-8 rounded-full flex items-center justify-center bg-[#285cb4]/10">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#285cb4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-lg text-[#0a0a0a] font-medium">
                    {question}
                </p>

                <p className="text-[#737373] leading-relaxed">
                    {answer}
                </p>
            </div>

        </div>
    </>
  )
}

export default FaqCard