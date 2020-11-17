import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
  return (
    <div>
        <Link to={'/map'}>Карта</Link>
        <Link to={'/profile'}>Профиль</Link>
        <Link to={'/login'}>Log in</Link>
    </div>
  );
}

export default Header;
