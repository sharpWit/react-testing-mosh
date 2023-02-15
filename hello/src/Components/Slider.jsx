import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { RotatingTriangles } from "react-loader-spinner";

export default function Slider() {
  const [heroes, setHeroes] = useState([]);
  const [curser, setCurser] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/heroes")
      .then((response) => response.json())
      .then((heroes) => setHeroes(heroes));
  }, []);
  function handleNext() {
    const current = curser + 1 < heroes.length ? curser + 1 : 0;
    setCurser(current);
  }
  function handlePrev() {
    const current = curser - 1 < 0 ? heroes.length - 1 : curser - 1;
    setCurser(current);
  }
  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heroes.length ? (
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        ) : (
          <>
            <Arrow direction="prev" handleClick={handlePrev} />
            <Card hero={heroes[curser]} />
            <Arrow direction="next" handleClick={handleNext} />
          </>
        )}
      </div>
    </div>
  );
}
