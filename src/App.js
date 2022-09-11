import styled from 'styled-components';
import CharacterCards from './components/characterCards';
import Header from './components/headerComponents';
import Footer from './components/footerComponents';
import HomePage from './pages/HomePage';

const PageWrapper = styled.div`

`;




const App = () => {
  return (
    <PageWrapper>
        <Header />
        <HomePage />
        <Footer />
    </PageWrapper>
  );
}

export default App;
