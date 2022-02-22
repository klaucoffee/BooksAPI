import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import MyLib from "./components/MyLib";
import Home from "./components/Home";
import About from "./components/About";

const rootElement = document.getElementById("root");
//stock ticker is a child of stock
//symbol is the name we are calling the URL param
//<Route path="stocks/:symbol" element={<Stock />} />
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/booksapi" element={<App />}>
        <Route index element={<Home />} />
        <Route path="my-library" element={<MyLib />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
