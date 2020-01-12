import React from "react";

const HolaMundo = () => {
  // Esto es JavaScript:
  const hello = "¡Hola Mundo!";
  const isTrue = true;

  // Esto es JSX (HTML + JavaScript):
  return (
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
      {isTrue ? <h4>Esto es verdadero</h4> : <h4>Esto es falso</h4>}
      {isTrue && <h4>Completa verdad</h4>}
    </div>
  );
};

export default HolaMundo;
