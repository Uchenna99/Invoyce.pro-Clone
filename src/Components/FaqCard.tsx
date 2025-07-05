

interface Props {
    question: string;
    answer: string;
}

const FaqCard = ({ question, answer }:Props) => {
  return (
    <>
        <div className="flex flex-col gap-3 p-6 rounded-lg border border-[#e5e5e5] shadow-sm">

            <p className="text-lg text-[#285cb4] font-medium">
                {question}
            </p>

            <p className="text-[#737373] leading-relaxed">
                {answer}
            </p>

        </div>
    </>
  )
}

export default FaqCard