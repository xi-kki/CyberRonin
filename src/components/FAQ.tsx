import { useState } from 'react';
import './FAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT IS CYBERRONIN?",
      answer: "CyberRonin is a limited collection of 5,000 unique 3D ninja avatars existing on the Ethereum blockchain. Each Avatar grants you access to the Neo-Tokyo metaverse and the exclusive Shadow Dojo."
    },
    {
      question: "HOW MUCH IS THE MINT?",
      answer: "The public mint price is set at 0.55 ETH. Check our official Discord for whitelist opportunities and presale discounts."
    },
    {
      question: "WHEN IS THE LAUNCH?",
      answer: "The mainnet launch is scheduled for Q4. Make sure to follow our Twitter and turn on notifications so you don't miss the exact date and time."
    },
    {
      question: "WHAT ARE THE UTILITIES?",
      answer: "Holders receive daily $SHADOW tokens, exclusive access to our P2E game beta, real-life merchandise drops, and voting rights in the DAO treasury."
    }
  ];

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">FREQUENTLY <span className="text-gradient">ASKED QUESTIONS</span></h2>
          <p className="section-subtitle">
            Everything you need to know about the CyberRonin clan.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon text-gradient" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
