import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Testimonial from './components/Testimonial';
import PriceSection from './components/PriceSection';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonial />
      <PriceSection />
    </Router>
    </>
  );
}

export default App;
