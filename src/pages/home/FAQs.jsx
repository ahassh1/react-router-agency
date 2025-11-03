import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";

const faqs = [
  {
    id: 1,
    question: "Who should use the app?",
    answer:
      "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools.",
  },
  {
    id: 2,
    question: "What is included with my subscription?",
    answer:
      "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan.",
  },
  {
    id: 3,
    question: "How do I get paid?",
    answer:
      "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard.",
  },
  {
    id: 4,
    question: "Is my personal information safe?",
    answer:
      "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times.",
  },
  {
    id: 5,
    question: "How can we get in touch?",
    answer:
      "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have.",
  },
];

const FAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  // toggle button to visible the answer
  const toggleFAQ = (id) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
    //  setExpandedFAQ(expandedFAQ === id ? null : id);
  };
  return (
    <div className="max-w-screen-2xl container py-20 px-5 mx-auto bg-sky-50">
      <HeadingSection
        subheading="FAQs"
        heading="Frequently Asked Questions
"
      />
      {/* faqs accordian section */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border bg-white border-gray-200 mb-4 transition duration-200"
          >
            {/* quesiton section */}
            <div
              className="cursor-pointer flex items-center justify-between p-4 "
              onClick={() => toggleFAQ(faq.id)}
            >
              <h1 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h1>
              <span
                className={`transform transition duration-300 text-lg font-bold ${
                  expandedFAQ === faq.id ? "rotate-180" : ""
                }`}
              >
                {expandedFAQ === faq.id ? "-" : "+"}
              </span>
            </div>

            {/* answer section */}
            {expandedFAQ === faq.id && (
              <div className="px-4 pb-4 text-gray-700 transition duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
