import React, { useState } from 'react';
import img from './assets/imgs/profile.jpg';
import './App.scss';
import './tailwind.output.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-10 font-roboto" id="home">
      <nav className="flex flex-col sm:flex-row sm-justify-between sm:sticky top-0 pt-8">
        <a href="#home" className="thumbnail hidden sm:inline">
          <img className="rounded-full h-10 w-10" src={img} alt="profile-pic" />
        </a>
        <button
          className="block w-12 sm:hidden outline-none focus:outline-none"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="toggle menu"
        >
          <svg
            width="40"
            height="40"
            className={`${showMenu ? 'hidden' : 'block'}`}
          >
            <line
              x1="0"
              x2="40"
              y1="10"
              y2="10"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="0"
              x2="40"
              y1="20"
              y2="20"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="0"
              x2="40"
              y1="30"
              y2="30"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <svg
            width="40"
            height="40"
            className={`${showMenu ? 'block' : 'hidden'}`}
          >
            <path
              d="M 10,10 L 30,30 M 30,10 L 10,30"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          className={`${
            showMenu ? 'flex' : 'hidden'
          } flex-col items-start rounded-md text-white max-w-xs sm:max-w-none bg-silver sm:px-0 sm:flex sm:flex-row sm:flex-1 sm:justify-end sm:items-center sm:bg-transparent`}
        >
          <a
            href="#work"
            className="py-4 px-2 sm:py-0 sm:px-6 hover:rounded-full nav-item"
          >
            Work
          </a>
          <a
            href="#interests"
            className="py-4 px-2 sm:py-0 sm:px-6 hover:rounded-full nav-item"
          >
            Interests
          </a>
          <a
            href="#contact"
            className="py-4 px-2 sm:py-0 sm:px-6 hover:rounded-full nav-item"
          >
            Contact
          </a>
        </div>
      </nav>
      <section className="flex justify-center items-center mt-64">
        <div className="hover">
          <div
            className="font-nosifer"
            style={{ fontSize: '8rem', color: '#32cd32' }}
          >
            JH
          </div>
        </div>
      </section>
      <div className="h-64 mb-64" />
      <div className="h-64 mb-64" />
      <div className="h-64 mb-64" />
      <div className="h-64 mb-64" />
      <div className="h-64 mb-64" />
      <section id="work" className="h-64 mb-32 pt-32">
        <h2 className="text-2xl">My Work</h2>
      </section>
      <section id="interests" className="h-64 mb-64">
        <h2 className="text-2xl">Interests</h2>
      </section>
      <section id="contact" className="h-64">
        <h2 className="text-2xl">Let's get in touch!</h2>
      </section>
    </div>
  );
}

export default App;
