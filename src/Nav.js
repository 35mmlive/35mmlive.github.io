import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Nav() {
  const navStyle={

color: 'white'
  
  };

  return (




 
<nav>

<h3>Navigation</h3>
<ul classname="nav-links">
  <Link style={navStyle} to='/Home'>
<li>Home</li>
</Link>
<Link to='/Cali' style={navStyle} >
<li >California</li>
</Link>
<Link to='/Nyc' style={navStyle}>
<li >NYC</li>
</Link>
<Link to='/Vt' style={navStyle} >
<li  >Vermont</li>
</Link>
<Link to='/Music' style={navStyle} >
<li >Music</li>
</Link>

</ul>

</nav>

  );
  }

export default Nav;
