import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "To be eligible for admission, candidates must have completed their 10+2 education with a minimum of 50% marks in Physics, Chemistry, and Biology/Mathematics. Additionally, candidates must qualify in the entrance examination conducted by the college.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include: 10th and 12th mark sheets, transfer certificate, migration certificate (if applicable), character certificate, passport-size photographs, and valid ID proof. A complete list will be provided in the admission brochure.",
    },
    {
      question: "What are the available courses?",
      answer:
        "We offer D.Pharm and B.Pharm programs. The D.Pharm is a 2-year diploma course, while B.Pharm is a 4-year undergraduate degree program. Both programs are approved by the Pharmacy Council of India.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "The fee structure varies for different courses and categories. Detailed fee information is available in the prospectus. We also offer various scholarships and financial aid options for eligible students.",
    },
    {
      question: "What are the hostel facilities?",
      answer:
        "We provide separate hostel facilities for boys and girls with modern amenities including Wi-Fi, study rooms, recreation areas, and 24/7 security. The hostels are located within the campus premises.",
    },
    {
      question: "What are the placement opportunities?",
      answer:
        "Our college has a dedicated placement cell that works with leading pharmaceutical companies. We have a strong track record of placements with top recruiters visiting our campus every year.",
    },
    {
      question: "What are the library facilities?",
      answer:
        "Our library is well-equipped with a vast collection of books, journals, and digital resources. Students have access to online databases and e-books. The library is open from 8:00 AM to 8:00 PM on weekdays.",
    },
    {
      question: "What extracurricular activities are available?",
      answer:
        "We offer various clubs and activities including sports, cultural events, technical clubs, and community service programs. Students can participate in inter-college competitions and national-level events.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-emerald-800">
                    {faq.question}
                  </h2>
                  {openIndex === index ? (
                    <FaChevronUp className="text-emerald-600" />
                  ) : (
                    <FaChevronDown className="text-emerald-600" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            If you have any other questions, feel free to contact our admission
            office.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="tel:+919322815988"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              Call Us: +91 9322815988
            </a>
            <a
              href="mailto:smkvpcop@gmail.com"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              Email Us: smkvpcop@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
