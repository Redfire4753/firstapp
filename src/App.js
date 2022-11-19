import Header from './components/Header';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import { Routes, Route } from 'react-router-dom';
import WeaponsPage from './pages/WeaponsPage';
import PassiveItemsPage from './pages/PassiveItemsPage';
import ArcanasPage from './pages/ArcanasPage';
import RelicsPage from './pages/RelicsPage';
import Navbar from './components/Navbar';
import CharacterDetailPage from './pages/CharacterDetailPage';
import WeaponDetailPage from './pages/WeaponDetailPage';
import styled from 'styled-components';

const PageBackground = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100vw;
  background-color: rgba(28, 27, 24, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  
  return (
    
        <PageBackground>
            <Header />
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='Characters' element={<CharacterPage />} />
              <Route path='Characters/:characterName' element={<CharacterDetailPage />} />
              <Route path='Weapons' element={<WeaponsPage />} />
              <Route path='Weapons/:weaponName' element={<WeaponDetailPage />} />
              <Route path='Passive%20Items' element={<PassiveItemsPage />} />
              <Route path='Arcanas' element={<ArcanasPage />} />
              <Route path='Relics' element={<RelicsPage />} />
            </Routes>
        </PageBackground>
  );
}

export default App;
