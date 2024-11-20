import './App.css'; 
import Home from './Home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Strength from './Home/strength/strength';
import Navbar from './Navbar/navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/strength' element={<Strength />} />
        {/*<Route path="/running" element={<Running />} />
        <Route path="/crossfit" element={<Crossfit />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/shop" element={<Shop />} />*/}
      </Routes>
    </Router>
  )
}

export default App

