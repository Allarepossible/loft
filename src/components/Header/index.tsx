import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/map'}>Map</Link>
        <Link to={'/profile'}> Profile</Link>
    </div>
);

export default Header;
