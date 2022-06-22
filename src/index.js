import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './styles.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // El modo Strict ayuda a principalmente a identificar errores con código legacy, ayuda a ver si es el código correcto y el recomendado en React, detecta todo lo que es viejo. Solo se aplica en desarrollo
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
);