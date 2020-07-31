import React from 'react';
import img from './assets/imgs/profile.jpg';
import './App.scss';
import './tailwind.output.css';

function App() {
  return (
    <div className='px-10 font-roboto' id='home'>
      <nav className='flex justify-between sticky top-0 pt-8'>
        <a href='/' className='border-solid border-2 border-grey rounded-full hover:shadow-md'>
          <img className='rounded-full h-10 w-10' src={img} alt='profile-pic' />
        </a>
        <div className='flex flex-1 justify-end items-center'>
          <a href='#work' className='px-6 hover:text-blue-700'>Work</a>
          <a href='#interests' className='px-6 hover:text-blue-700'>Interests</a>
          <a href='#contact' className='px-6 hover:text-blue-700'>Contact</a>
        </div>
      </nav>
      <div className='h-64 mb-64' />
      <div className='h-64 mb-64' />
      <div className='h-64 mb-64' />
      <div className='h-64 mb-64' />
      <div className='h-64 mb-64' />
      <div className='h-64 mb-64' />
      <section id='work' className='h-64 mb-64'>My work</section>
      <section id='interests' className='h-64 mb-64'>Interests</section>
      <section id='contact' className='h-64 mb-64'>Contact</section>
    </div>
  );
}

export default App;
