import React from 'react';
import '../styles/Cocktail.css';
const Cocktail = () => {
  return (
    <div className="cocktail-div">
      <div className="upper-div">
        <div className="cocktail-name">The Old Fashioned</div>
      </div>
      <div className="lower-div">
        <div className="lower-paralax-div">
          <div className="parallax-img">
            <div className="sample-div-1"></div>
            <div className="sample-div-2"></div>
          </div>
          <div className="parallax-img">
            <div className="sample-div-1"></div>
            <div className="sample-div-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cocktail;
