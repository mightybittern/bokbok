import { useState } from 'react';
import viteLogo from '/coq-inu-coin-svg.svg';
import './App.scss';
import Dialog from './components/dialog/dialog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="header">
        <div className="header__logo">
          <img src="./src/assets/images/bok.webp" width='200' height='200' alt="bok logo"></img>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className='header__nav-link' href="#index.html">home</a>
            </li>
            <li className="header__nav-item">
              <a className='header__nav-link' href="#gallery.html">gallery</a>
            </li>
            <li className="header__nav-item">
              <a className='header__nav-link' href="#about.html">about us</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1 className="hero__title">Bok Bok</h1>
      </section>
      {/* <div className="dialog"> */}
      {/* <Dialog /> */}
      {/* </div> */}

      <p>stay tuned</p>
    </>
  );
}

export default App;
