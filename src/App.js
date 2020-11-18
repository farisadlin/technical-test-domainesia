import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
    </Router>
    </>
  );
}

export default App;
