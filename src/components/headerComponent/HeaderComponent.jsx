import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="left-header">
            <a href="https://tokopedia.com" className="btn-header">
              &#8592;
            </a>
            <h3>Play</h3>
          </div>
          <div className="right-header btn-header">&#9762;</div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
