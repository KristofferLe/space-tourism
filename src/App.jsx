import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";
import CrewPage from "./pages/crew/crew";
import DestinationPage from "./pages/destination/destination";
import TechnologyPage from "./pages/technology/technology";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/*" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
