/* Import sirve para traer todo lo que haya exportado desde el paquete "react" que esta en node_modules (porque al no poner ./ no especifique la direccion) y guarda ese valor en la variable llamada "React" */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"; 
import "./style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons/fa';



/* const elemento_del_dom = document.getElementById('root') */
/* Variaable que hace que el dom interprete lo que nosotros escribimos en JSX */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Hay que escribir la llamada a una funcion como si estuvieramos escribiendo en HTML */
    <App />
);


