import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Collections from './pages/Collections/Collections';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Home />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
