import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import { Routes, Route } from 'react-router-dom';
import WeaponsPage from './pages/WeaponsPage';
import PassiveItemsPage from './pages/PassiveItemsPage';
import ArcanasPage from './pages/ArcanasPage';
import RelicsPage from './pages/RelicsPage';
import Navbar from './components/Navbar';





const App = () => {
  
  return (
    <>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Characters' element={<CharacterPage />} />
          <Route path='Weapons' element={<WeaponsPage />} />
          <Route path='Passive-Items' element={<PassiveItemsPage />} />
          <Route path='Arcanas' element={<ArcanasPage />} />
          <Route path='Relics' element={<RelicsPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
