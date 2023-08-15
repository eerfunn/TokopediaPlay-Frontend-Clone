import React from "react";
import arrowButton from "../../images/icons8-arrow-50.png";
import searchButton from "../../images/icons8-search-50.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="left-header">
            <a href="https://tokopedia.com" className="btn-header">
              <img
                src={arrowButton}
                alt="Back to Tokopedia"
                className="header-btn"
              />
            </a>
            <h3>Play</h3>
          </div>
          <div className="right-header btn-header">
            <img
              src={searchButton}
              alt="search videos"
              className="header-btn"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
