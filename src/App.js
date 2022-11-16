import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Components
import Nav from './components/Navbar/NavBar';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
//Pages  
import Home from './pages/Home/Home';
import Cep from './pages/cep/cep';

function App() {
  function Error(){
    return <h3>Error</h3>
  }
  return (
    <BrowserRouter>
      <Nav/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cep" element={<Cep /> }/>
            <Route path="*" element={<Error />}/>
          </Routes>
        </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;