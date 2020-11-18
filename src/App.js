import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
    </Router>
    </>
  );
}

export default App;
