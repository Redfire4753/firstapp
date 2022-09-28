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



const App = () => {
  
  return (
    <>
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
    </>
  );
}

export default App;
