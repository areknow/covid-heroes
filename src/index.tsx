import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './sections/hero';
import Cause from './sections/cause';
import Need from './sections/need';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Donate from './sections/donate';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Cause />
    <Need />
    <Donate />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
