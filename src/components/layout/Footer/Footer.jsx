import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white h-[350px] mt-10 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <h1 className='text-[35px] font-semibold'>RE:COMMERSE</h1>
        </div>

        {/* Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


