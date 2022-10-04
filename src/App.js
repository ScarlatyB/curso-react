import React from 'react';
import './style.css';
import Frase from './components/Frase';
import UsandoProps from './components/UsandoProps';

export default function App() {
  return (
    <div>
      <Frase />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UsandoProps nome="Scar" idade="26" estadocivil="namorando" />
    </div>
  );
}
