import React from "react";

function PriceCard({ title, price, features = [], included = [] }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>
        <strong>{price}</strong>/month
      </h1>
      <hr />
      <ul>
        {features.map((feature, index) => {
          const isIncluded = included.includes(index);
          return (
            <li
              key={index}
              className={isIncluded ? "enabled" : "disabled"}
            >
              <span className="icon">{isIncluded ? "✔" : "✖"}</span>{" "}
              <span className={isIncluded ? "bold" : ""}>{feature}</span>
            </li>
          );
        })}
      </ul>
      <button className="btn">BUTTON</button>
    </div>
  );
}

export default PriceCard;
