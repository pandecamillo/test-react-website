import React from "react";
import ReactDOM from "react-dom/client";
import PageHome from "./pages/pageHome";
import PageSecond from "./pages/pageSecond";
import Page404 from "./pages/page404";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="second" element={<PageSecond />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PageRouter />);
