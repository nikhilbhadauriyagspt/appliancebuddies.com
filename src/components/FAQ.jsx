import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Will you fix my appliance at my home?",
      answer: "Yes, almost all our repairs are done right at your home. You don't need to carry your machine anywhere. We bring our tools to you."
    },
    {
      question: "Do you provide a warranty after the repair?",
      answer: "Yes, we stand behind our work. We offer a clear service warranty on most repairs so you can have peace of mind that your appliance will keep working."
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 1 to 2 hours once we identify the problem. Our goal is to get your appliance back to normal on the same day."
    },
    {
      question: "Are your spare parts original?",
      answer: "We only use high-quality, genuine spare parts. This ensures that your appliance lasts longer and stays safe for you and your family."
    },
    {
      question: "How much will the repair cost?",
      answer: "Our expert will first check your machine and give you a clear price before starting any work. No hidden costs, no surprises."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100 text-amber-600">
            <HelpCircle size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Common Questions</span>
          </div>
          <h2 className="text-5xl font-black text-gray-950 tracking-tight leading-none">
            Got questions? <br/><span className="text-amber-600 italic">We have answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`group border rounded-[24px] overflow-hidden transition-all duration-500 ${
                openIndex === idx ? 'border-amber-600 bg-amber-50/30' : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-8 py-7 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                  openIndex === idx ? 'text-gray-950' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx ? 'bg-amber-600 text-white rotate-0' : 'bg-gray-50 text-gray-400 rotate-90'
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8 text-gray-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
