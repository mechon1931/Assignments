import './App.css';
import CampsitesDirectoryPage from '../src/pages/CampsitesDirectoryPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';


import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='direectory' element={<CampsitesDirectoryPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
