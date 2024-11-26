import React from 'react';
import "./Presentation.css"

export default function Presentation() {
  return (
    <div id={"presentation"} className={"flex-container"}>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={"/space2.mp4"} type="video/mp4"/>
      </video>
      <h1>Planetopia</h1>
      <h2>Le plus grand site de vente d'objets célestes de l'univers</h2>
    </div>
  );
}
