import React from 'react';
import './App.css';
import NucampLogo from './app/assets/img/logo.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';


function App() {
  return (

    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>

      Hello Nucamp!
    </div>
  );
}

export default App;