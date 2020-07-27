import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <header>
      <nav>
        <p>
          <Link to='/'>HOME</Link>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
