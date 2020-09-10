import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Menu = () => (
  <div className="menu">
    
      <Link to="/"><i className="fas fa-home"></i>Home</Link>
      <Link to="/database"><i className="fas fa-database"></i>Database</Link>
    
  </div>
)

export default Menu