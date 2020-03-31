import React from 'react';
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
