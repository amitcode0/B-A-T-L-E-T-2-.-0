import React from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Header />
      <HeroSection />
      <ProductShowcase />
      <Footer />
      {/* <h1>LushGlow</h1>
      <p>Luxury Beauty, Reimagined</p> */}
    </div>
  );
}

export default App;
