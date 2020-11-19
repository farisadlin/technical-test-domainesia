import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Testimonial from './components/Testimonial';
import PriceSection from './components/PriceSection';
import CustomerSection from './components/CustomerSection';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      {/* SplitSection */}
      <Services />
      {/* SplitSection */}
      <Testimonial />
      {/* SplitSection */}
      <PriceSection />
      {/* SplitSection */}
      <CustomerSection />
      {/* FooterSection */}
    </Router>
    </>
  );
}

export default App;
