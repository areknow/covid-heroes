import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Hero from './sections/hero';
import Cause from './sections/cause';
import Need from './sections/need';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Cause />
    <Need />
  </React.StrictMode>,
  document.getElementById('root')
);
