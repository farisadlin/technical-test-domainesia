import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Testimonial from './components/Testimonial';
import PriceSection from './components/PriceSection';
import CustomerSection from './components/CustomerSection';
import Footer from './components/Footer';

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
      <Footer />
    </Router>
    </>
  );
}

export default App;
