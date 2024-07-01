// Vanilla Javascript 🍦


/* 
recuperamos el boton
const button = document.querySelector('button')

// Al hacer click en el button, ejecutar una funcion

button.addEventListener('click', function () {
  // recuperar el id del atributo del html
  const id = button.getAttribute('data-id') // puede ser this o button, es lo mismo.

  //llamar a un servicio para actualizar si me gusta

  // Poner el button como "me gusteado": toggleLike(id)

  if (button.classList.contains('liked')) {
    button.classList.remove('liked')
    button.innerText = 'Me Gusta'
  } else {
    button.classList.add('liked')
    button.innerText = 'Quitar Me Gusta'
  }
})

 */

// El problema es que este codigo es imperativo. 
// Por ejemplo si copiamos el boton varias veces la 
// logica comienza a complicarse.

// recuperamos TODOS los botones
  const buttons = document.querySelectorAll('button')


// Al hacer click en el button, ejecutar una funcion
buttons.forEach( button => {
  button.addEventListener('click', function () {
    // recuperar el id del atributo del html
    const id = button.getAttribute('data-id') // puede ser this o button, es lo mismo.

    //llamar a un servicio para actualizar si me gusta

    // Poner el button como "me gusteado": toggleLike(id)

    if (button.classList.contains('liked')) {
      button.classList.remove('liked')
      button.innerText = 'Me Gusta'
    } else {
      button.classList.add('liked')
      button.innerText = 'Quitar Me Gusta'
    }
  })
})


// El problema aqui es que si la ui esta muy lejos de la logica deberiamos empezar
// a modularizar la logica y crear metodos, pero esto es dificil.
// El otro prolbema es que este approach no es escalable.
// El problema del codigo imperativo es que no escala bien. 