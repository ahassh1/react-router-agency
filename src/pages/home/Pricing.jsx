import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";

const pricingPlans = [
  {
    name: "Freelancer",
    monthlyPrice: 25,
    yearlyPrice: 250, // 25 * 12
    saves: "$25 USD per month, paid annually",
    features: [
      "1 Project",
      "Basic Support",
      "Access to all templates",
      "5GB Storage",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 65,
    yearlyPrice: 650, // 65 * 12
    saves: "$55 USD per month, paid annually",
    features: [
      "5 Projects",
      "Priority Support",
      "Access to all templates",
      "25GB Storage",
      "Advanced Analytics",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 95,
    yearlyPrice: 950, // 95 * 12
    saves: "$95 USD per month, paid annually",
    features: [
      "Unlimited Projects",
      "24/7 Support",
      "Access to all templates",
      "Unlimited Storage",
      "Custom Branding",
      "Team Collaboration",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <HeadingSection
        subheading="Pricing"
        heading="Choose Your Plan
"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      {/* toggle for yearly/monthly plan */}

      <div className="text-center mb-10">
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-3 text-lg text-gray-600">
            {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="toggle-bg w-14 h-8 bg-gray-300 rounded-full"></div>
            <div
              className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 ${
                isYearly ? "transform translate-x-6" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Pricing;
