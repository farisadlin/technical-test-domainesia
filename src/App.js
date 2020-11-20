import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Testimonial from './components/Testimonial';
import PriceSection from './components/PriceSection';
import CustomerSection from './components/CustomerSection';
import Footer from './components/Footer';
import SeparatorUp from './components/separator/SeparatorUp';
import SeparatorDown from './components/separator/SeparatorDown';
import SeparatorIntro from './components/separator/SeparatorIntro';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <SeparatorIntro />
      <SeparatorUp />
      <Testimonial />
      <SeparatorDown />
      <PriceSection />
      <CustomerSection />
      <Footer />
    </Router>
    </>
  );
}

export default App;
