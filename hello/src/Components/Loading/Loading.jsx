import React from "react";
import "./loading.css";
import loading from "./../../assets/images/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading ..." />
    </div>
  );
}
