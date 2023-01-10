import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
