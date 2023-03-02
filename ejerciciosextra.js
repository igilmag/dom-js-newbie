// Captura con JavaScript la etiqueta h1 de esta página y al hacer click sobre él que salga el mensaje "Hola mundo

document.querySelector('h1')
  .addEventListener('click', (e) => {
    e.target.innerHTML += ' Hola mundo'
  })
// Al pulsar el botón  deberá ocultarse susodicho botón.
document.querySelector('#miBoton')
  .addEventListener('click', (e) => {
    e.target.style.opacity = '0'
  })

// Utiliza el evento mouseover para cuando pasemos el ratón sobre este  éste desaparezca
document.querySelector('#meMuero')
  .addEventListener('mouseover', (e) => {
    e.target.style.display = 'none'
  })

// Obtén el valor y muestra el valor mediante una ventana modal el contenido de este cuadro de texto:

function mensaje (ev) {
  const citeEL = document.getElementsByTagName('cite')[0]
  citeEL.textContent = ev.target.value
}

document.getElementById('miCaja').oninput = mensaje

// El color de fondo de este párrafo (id="pColor") se pondrá de color de rojo si en el campo de texto isNaN existe un número. En el css existe una clase llamada "rojo" que realiza esta acción.

function esNoNumero () {
  const parrafoEL = document.querySelector('#pColor')
  const inputEL = document.querySelector('#isNaN')

  if (isNaN(inputEL.value)) {
    parrafoEL.classList.remove('rojo')
  } else { // Números incluído ''
    parrafoEL.classList.add('rojo')
  }
}

document.querySelector('#bColor').addEventListener('click', esNoNumero)
