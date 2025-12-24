import "./index.css";

import Navigation from './components/Navigation'
import HeroSection from "./components/HeroSection";
import WorkSection from './components/WorkSection'
import BackgroundSection from "./components/BackgroundSection";
 import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="container">
        <HeroSection />
        <WorkSection />
        <BackgroundSection />
      </main>
      <Footer />
    </div>
  );
}

