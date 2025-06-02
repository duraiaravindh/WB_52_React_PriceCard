import React from "react";
import PriceCard from "./PriceCard";
import "./App.css";

const cardData = [
  {
    title: "FREE",
    price: "$0",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    included: [0, 1, 2, 3],
  },
  {
    title: "PLUS",
    price: "$9",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    included: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    title: "PRO",
    price: "$49",
    features: [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    included: [0, 1, 2, 3, 4, 5, 6, 7],
  },
];

function App() {
  return (
    <div className="container">
      {cardData.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          price={card.price}
          features={card.features}
          included={card.included}
        />
      ))}
    </div>
  );
}

export default App;
