import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Hero from './sections/hero';
import Cause from './sections/cause';
import Need from './sections/need';
import Contact from './sections/contact';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Cause />
    <Need />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
