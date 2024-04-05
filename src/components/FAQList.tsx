import { useState } from 'react';

type FAQListProps = { data: { question: string; answer: string }[] };

const FAQList = ({ data }: FAQListProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      {data.map((faq, index) => (
        <div key={faq.question} className="faq flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h3
              onClick={() => toggleFAQ(index)}
              className="max-w-[80%] hover:text-[#AD28EB] transition-all cursor-pointer question text-normal font-WorkSansSemiBold text-[#2a0134]"
            >
              {faq.question}
            </h3>
            <img
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer"
              width={25}
              height={25}
              src={`../../src/assets/images/icon-${
                openIndexes.includes(index) ? 'minus' : 'plus'
              }.svg`}
              alt={openIndexes.includes(index) ? 'Minus Icon' : 'Plus Icon'}
            />
          </div>
          {openIndexes.includes(index) && (
            <p className="text-sm text-grayishPurple">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
