import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import { BrowserRouter } from 'react-router-dom'
// import Home from './pages/main'
import Routes from './routes.js'
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="menu-content">
        <BrowserRouter>
          <Menu />
          <Routes />
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
