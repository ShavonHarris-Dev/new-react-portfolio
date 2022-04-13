import React from "react";
import "./index.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Background />
      <Skills />
      <Projects />
      <Footer />
      
    </div>
  );
};

export default App;
