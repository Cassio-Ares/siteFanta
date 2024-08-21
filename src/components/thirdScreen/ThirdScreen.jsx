"use client";
import "./styles.css";

export const ThirdScreen = () => {
  return (
    <div className="containerThirdScreen">
      <div className="content">
        <div className="contentShow">
         <p className="text">
          Grape
         </p>
         <button className="btn">Buy Now</button>
        </div>
        <div className="contentShow">
        <p className="text">
          Orange
         </p>
         <button className="btn">Buy Now</button>
        </div>
        <div className="contentShow">
        <p className="text">
          Apple
         </p>
         <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
