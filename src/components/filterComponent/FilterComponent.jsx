import React, { useState } from "react";

function FilterComponent() {
  const activeClicked = (button) => {};

  return (
    <>
      <div className="filter">
        <a href="#" className="btn-filter" id="live">
          Live
        </a>
        <a href="#" className="btn-filter" id="explore">
          Explore
        </a>
        <a href="#" className="btn-filter" id="ultah">
          Promo ULTAH!
        </a>
        <a href="#" className="btn-filter" id="official">
          Official Store
        </a>
        <a href="#" className="btn-filter" id="tips">
          Tips & Rekomendasi
        </a>
        <a href="#" className="btn-filter" id="new">
          Terbaru
        </a>
        <a href="#" className="btn-filter" id="upcoming">
          Upcoming
        </a>
      </div>
    </>
  );
}

export default FilterComponent;
