import React, { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title = `You clicked ${count} times!`;
  });
  return (
    <>
      <p>You clicked {count} times!</p>
      <input
        value={step}
        type="number"
        onChange={(event) => setStep(parseInt(event.target.value))}
      />
      <button onClick={() => setCount(count + step)}>Click me!</button>
    </>
  );
}
