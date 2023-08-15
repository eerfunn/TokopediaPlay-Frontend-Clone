import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailVideo from "./pages/detailVideo/DetailVideo";
import VideoItemComponent from "./components/videoComponent/VideoItemComponent";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<VideoItemComponent />} />
        </Route>
        <Route path="/detail/:id" element={<DetailVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
