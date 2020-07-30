import React from 'react';
import Logo from '../../assets/LogoMain.png'
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PoeFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;