import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <h2>My Website</h2>
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;