import { useState } from 'react';
import './App.scss';
import Dialog from './components/dialog/dialog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <header className='header'>
    <a href="https://bokbokcoqn.xyz" className="header__logo">
      <img src="./src/assets/images/bok.webp" alt="Bok Bok Logo" width='200' height='200' />
    </a>
    <nav className='header__nav-list'>
      <a className='header__nav-item' href="#about">About</a>
      <a className='header__nav-item' href="#buy">Buy</a>
      <a className='header__nav-item' href="#community">Community</a>
    </nav>
  </header>

  <main className="main">
    <h1 className='main__title'>Welcome to Bok Bok</h1>
    <p className='main__description'>The most egg-cellent meme coin in the coop. Crowning chickens, one token at a time.</p>
    <button className="main__button btn">Get Some Bok 🐔</button>
  </main>

  <footer className='footer'>
    <p>Follow us:</p>
    <ul className='footer__social-links'>
      <li><a className='footer__social-link' href="#">Twitter</a></li>
      <li><a className='footer__social-link' href="#">Telegram</a></li>
      <li><a className='footer__social-link' href="#">Discord</a></li>
    </ul>
  </footer>
      <div className="dialog">
      <Dialog />
      </div>
    </>
  );
}

export default App;
