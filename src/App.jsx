import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

//* Ahora como sería si quisieramos consumir datos de una API ?:
// Los componentes SIEMPRE deben iniciar con mayusculas. "App"
// const [data, setData] = useState([]) ----> Inicio el estate como un arreglo vacío

// useEffect(() => {
//   setData(db) ----> Siempre hay que modificar el estado con la funcion seteadora.
// }, [])

//* 1- Inicio el estate como un arreglo vacío
//* 2- Cuando el componente esté listo seteo el estate (con setData) la base de datos.


function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([])


  const addToCart = (item) => {
    // Que es la inmutabilidad en React. Cuando un State es inmutable podemos ir al enlace: https://doesitmutate.xyz/ 

    const elementoExistente = cart.findIndex(guitar => guitar.id === item.id)
    if(elementoExistente >= 0){
      const updatedCart = [...cart]
      updatedCart[elementoExistente].cantidad++
      setCart(updatedCart)
    } else {
      item.cantidad = 1
      setCart([...cart, item])
    }
  }

  return (
    // El return es lo que muestra el componente en pantalla.
    <>
      <Header 
        cart={cart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key = {guitar.id}
              guitar = {guitar}
              // cart = {cart} => segun el profe se puede hacer de otra forma
              setCart = {setCart}
              addToCart = {addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;





//* Vamos a detallar los 3 hooks mas importantes y comunes de React:

//* useState - ¿Qué es useState?
// useState es un hook que te permite añadir estado a componentes funcionales en React. Antes, solo los componentes de clase podían tener estado, pero con useState, los componentes funcionales también pueden gestionar su propio estado.

// ¿Para qué sirve? - useState sirve para manejar datos que pueden cambiar con el tiempo en tu componente. Por ejemplo, un contador, el texto de un input, o cualquier otra información que necesite ser actualizada y reflejada en la interfaz de usuario.
// Vamos a crear un contador que aumenta cada vez que hacemos clic en un botón:

// import React, { useState } from 'react';

// function Contador() {
//  Declaramos una variable de estado llamada "contador" y una función para actualizarla "setContador"
//   const [contador, setContador] = useState(0);

//   return (
//     <div>
//       <p>Has hecho clic {contador} veces</p>
//       <button onClick={() => setContador(contador + 1)}>
//         Aumentar contador
//       </button>
//     </div>
//   );
// }

// export default Contador;

//******************************************** */

//* useEffect - ¿Qué es useEffect?
// useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales. Los efectos secundarios son cualquier cosa que afecta algo fuera del alcance de la función que se está ejecutando, como una llamada a una API, suscripciones a eventos, o actualizar el DOM.

// ¿Para qué sirve? - useEffect sirve para manejar tareas como:

// Fetching de datos (llamadas a APIs).
// Suscripciones a eventos.
// Manejo de intervalos o temporizadores.
// Limpieza de recursos cuando el componente se desmonta.
// Vamos a crear un componente que muestra un mensaje en la consola cada vez que el componente se renderiza.

// import React, { useState, useEffect } from 'react';

// function MensajeConsola() {
//   const [mensaje, setMensaje] = useState('Hola, mundo!');

//   useEffect(() => {
//     console.log('El componente se ha renderizado o actualizado');

//     return () => {
//       console.log('El componente se va a desmontar');
//     };
//   }, [mensaje]);

//   return (
//     <div>
//       <p>{mensaje}</p>
//       <button onClick={() => setMensaje('¡Hola, React!')}>
//         Cambiar mensaje
//       </button>
//     </div>
//   );
// }

// export default MensajeConsola;

//* Despues podemos encontrar muchos mas hooks
// useReducer, useCallback, useMemo, useRef y varios más.
