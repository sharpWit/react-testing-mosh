import React from "react";
import BuyBtn from "./BuyBtn";
import Count from "./Count";

export default function Buy({ name }) {
  return (
    <div className="buy-wrapper">
      <Count />
      <BuyBtn name={name} />
    </div>
  );
}
