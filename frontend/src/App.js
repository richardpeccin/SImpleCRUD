import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './pages/main'
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="menu-content">
        <Menu />
        <Main />
      </div>
      
    </div>
  );
}

export default App;
