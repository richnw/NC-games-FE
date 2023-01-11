import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/SingleReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState("jessjelly");
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route
            path="/reviews/:reviewID/*"
            element={<SingleReview currentUser={currentUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
