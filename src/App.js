import styled from 'styled-components';
import CharacterCards from './components/CharacterCards';
import Header from './components/HeaderComponents';
import Footer from './components/FooterComponents';

const PageWrapper = styled.div`

`;

const HeaderWrapper = styled.header`
  background: linear-gradient(45deg, rgba(28,17,24,255) 0%, rgba(29,17,21,255) 50%, rgba(132,32,22,255) 100%);
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BodyWrapper = styled.div`
  background-image: url('/img/Vampire Survivors logo.jpg');
  background-color: rgba(132,32,22,255);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background-color: rgba(28,17,24,255);
`;
const NavbarWrapper = styled.nav`

`;

const App = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NavbarWrapper>
      </NavbarWrapper>
      <BodyWrapper>
      </BodyWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
}

export default App;
