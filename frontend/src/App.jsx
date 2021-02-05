import React from 'react'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import './assets/styles/global.css';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <main>
            <Container fluid>
              <Routes />
            </Container>
          </main>
        </div>
      </BrowserRouter>
     
    );
  }
  
  export default App;


