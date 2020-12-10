import { Container } from 'react-bootstrap';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import HeroSection from '../components/HeroSection/HeroSection';
import NavbarComp from '../components/NavbarComp/NavbarComp';
import Sections from '../components/Sections/Sections';
import Tiers from '../components/Tiers/Tiers';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Container fluid className="App__container--p-Bg">
        <HeroSection />

        <Container fluid className="App__container--s-Bg">
          <Sections />
        </Container>
        <Tiers />
        <Container fluid className="App__container--d-Bg">
          <BrandsSection />
        </Container>
        

      </Container>
    </div>
  );
}

export default App;
