import styled from 'styled-components';
import CharacterCards from './components/characterCards';
import Header from './components/headerComponents';
import Footer from './components/footerComponents';
import HomeBody from './components/homeBody';

const PageWrapper = styled.div`

`;



const App = () => {
  return (
    <PageWrapper>
        <Header />
        <HomeBody />
        <Footer />
    </PageWrapper>
  );
}

export default App;
