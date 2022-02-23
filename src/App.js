import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./Pages/StartScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
