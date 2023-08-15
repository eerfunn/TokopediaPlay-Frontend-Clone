import React from "react";
import "../../styles/main.css";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import FilterComponent from "../../components/filterComponent/FilterComponent";
import VideoComponent from "../../components/videoComponent/VideoComponent";

const HomePage = () => {
  return (
    <>
      <div className="sticky">
        <HeaderComponent />
        <FilterComponent />
      </div>
      <main className="main-homepage">
        <VideoComponent />
      </main>
    </>
  );
};

export default HomePage;
