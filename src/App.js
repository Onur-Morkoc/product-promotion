import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
          <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}></Route>

        </Routes>
          
    </div>
  );
}

export default App;
