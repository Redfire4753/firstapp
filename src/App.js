import styled from 'styled-components';
import CharacterCards from './components/CharacterCards';
import Header from './components/HeaderComponents';
import Footer from './components/FooterComponents';
import HomeBody from './pages/HomeBody';
import { Routes, Route } from 'react-router-dom';

const PageWrapper = styled.div`

`;



const App = () => {
  return (
    <PageWrapper>
        <Header />
        <Routes>
          <Route path='/' element={<HomeBody />} />
          
        </Routes>
        <Footer />
    </PageWrapper>
  );
}

export default App;
