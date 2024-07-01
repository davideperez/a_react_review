import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'


// Nos traemos el elemento del html que usaremos como raiz.
const appDomElement = document.getElementById('app')

// Creamos el root de react. En react lo que vamos a generar es un arbol de elementos.
// Le decimos en que elemento queremos poner nuestra raiz:
const root = ReactDOM.createRoot(appDomElement)

/* 01

  // Ahora le pedimos que renderize:

  root.render("Hola React!")

  // hasta aqui todo ok.

*/

/* 02

  // Pero no podemos renderizar un button: 

  root.render('<button>Hola React!</button>') 

  // Esto React lo hace para que no se pueda inyectar codigo.
  // Luego se simplifica con jsx, pero en este ejmplo haremos lo siguiente:
  // Como no podemos rendereizar html directo tenemos que crear un elemento. Los parametros son, el nombre del elemento, los atributos y su contenido: ( los attrs pueden ser null)

  const button = React.createElement('button', {'data-id': 123 }, 'Me Gusta')

  root.render(button)
*/


/* 03

  const button = React.createElement('button', {'data-id': 123 }, 'Button 1')
  const button2 = React.createElement('button', {'data-id': 456 }, 'Button 2')
  const button3 = React.createElement('button', {'data-id': 789 }, 'Button 3')

  root.render(button)

  // Ahora necesitamos renderizar los 3 botones y no podemos hacer:  root.render(button, button2, button3)
  // Esto es porque no podemos renderizar mas de 1 elemento a la vez, solo 1.
  // La solucion es tener un elemento que envuelva todos tus elementos como se ve en la siguiente seccion: 

*/


// 04


const button = React.createElement('button', {'data-id': 123 }, 'Button 1')
const button2 = React.createElement('button', {'data-id': 456 }, 'Button 2')
const button3 = React.createElement('button', {'data-id': 789 }, 'Button 3')

const app = React.createElement(React.Fragment, null, [button, button2, button3])

root.render(app)

// Notar que en vez de usar un div, usamos un fragment para que los botones no nos queden dentro de un div.
// Asi nuestro html queda lo mas semantico posible.

// Por ultimo notar que nuestro codigo queda bastante verboso y largo, sigue siendo imperativo, esto lo va a venir a solucionar jsx 
// que nos permitira escribir de una forma mas declarativa, lo haremos en el siguiente capitulo/folder.


{/* 05

  // Asi se veria en jsx, mas declarativo.

    <React.Fragment>
    <button data-id: '123'>Button 1</button>
    <button data-id: '456'>Button 2</button>
    <button data-id: '789'>Button 3</button>
  </React.Fragment> 

*/}


/* 06

  // Con swc podemos explorar como se realiza "la magia" que convierte el codigo imperativo de js a jsx
  // https://swc.rs/playground

  Entonces este jsx: 

  const buttonJSX =  <button data-id='123' >Button 1</button>

  Se convierte a : 

  var buttonJSX = React.createElement("button", {
      "data-id": "123"
  }, "Button 1");


  Y algo tan intuitivo como esto, hecho con JSX:

  <div>
      <h1>Titulo</h1>
      <p id='linea1'>Esto seria mucho mas <strong>complicado</strong></p>
      <button>Esto seria mucho mas combuttonlicado</button>
  </div>

  Habria que hacerlo asi:

  React.createElement("div", null, React.createElement("h1", null, "Titulo"), React.createElement("p", {
      id: "linea1"
  }, "Esto seria mucho mas ", React.createElement("strong", null, "complicado")), React.createElement("button", null, "Esto seria mucho mas combuttonlicado"));

*/


/* 07

  Ademas en las llaves de jsx solo se pueden poner EXPRESIONES y no DECLARACIONES:

  Esto si:

  const element = <strong>Numero Aleatorio: {Math.random()}</strong>

  Esto no:

  const element = <strong>Numero: {if(true) { 253 }}</strong>
  

*/

