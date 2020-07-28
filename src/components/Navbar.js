import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <header>
      <nav>
        <p>
          <Link to='/'>Home</Link>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
