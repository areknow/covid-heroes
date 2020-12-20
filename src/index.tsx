import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Hero from './sections/hero';
import Cause from './sections/cause';
import Need from './sections/need';
import Contact from './sections/contact';
import Footer from './sections/footer';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Cause />
    <Need />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
