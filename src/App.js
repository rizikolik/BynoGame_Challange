import React from "react";
import Header from "./components/header.js";
import Card from "./components/nasaCard";
import Footer from "./components/footer.js";
import "./styling.scss";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Card />
		  <Footer/>
      
    </div>
  );
}
