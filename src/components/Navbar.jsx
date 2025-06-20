

// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-stone-50 shadow-md sticky top-0 z-50 p-4">
      <div className="container mx-auto px-6 flex justify-between items-center">


        <div className="flex items-center">
          <div className="flex items-center justify-center ">    <a href='/'>
            <img
              src='/images/logo.jpeg'
              alt='company logo'
              className="w-25 h-25 rounded-full object-contain"
            />
          </a>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-800">Investir en Afrique</h1>
            <p className="text-xs text-gray-600">Investir au pays</p>
          </div>
        </div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center text-sm text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition-colors">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors">  À propos</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 transition-colors">Nos Services</Link></li>
          <li><Link to="/news" className="hover:text-blue-600 transition-colors">News</Link></li>
          <li><Link to="/careers" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">Nous Rejoindre</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Nous Contacter</Link></li>
          <li>
            <a
              href="https://wa.me/237652280125"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Nous Contacter
            </a>
          </li>
        </ul>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">Accueil</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">  À propos</Link></li>
            <li><Link to="/services" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">Nos Services</Link></li>
            <li><Link to="/news" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">News</Link></li>
            <li><Link to="/careers" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">Nous Rejoindre</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">Nous Contacter</Link></li>
            <li>
              <a
                href="https://wa.me/237652280125"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Nous Contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}