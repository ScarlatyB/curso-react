import React from 'react';

export default function UsandoProps(props) {
  return (
    <div>
      <h2>Nome:{props.nome}</h2>
      <h3>Idade: {props.idade}</h3>
      <h3>Estado civil:{props.estadocivil}</h3>
    </div>
  );
}
