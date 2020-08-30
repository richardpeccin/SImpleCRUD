import React from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="menu-content">
        <Menu />
        <div className="content"></div>
      </div>
      
    </div>
  );
}

export default App;
