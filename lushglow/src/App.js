import React, { useState, useEffect } from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";
import AboutUs from "./components/AboutUs";
import Loader from "./components/Loader";
import ContactSection from "./components/ContactSection";
// import AboutUs from "./components/AboutUs";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-bg-wrapper">
      <DarkModeToggle />
      <Header />
      <HeroSection />
      <ProductShowcase />
      <AboutUs />
      <ContactSection />
      {/* <AboutUs /> */}
      <Footer />
      {/* <h1>LushGlow</h1>
      <p>Luxury Beauty, Reimagined</p> */}
    </div>
  );
}

export default App;
