'use strict'

// Al cargar la página
document.querySelector('#innerHTML').innerHTML = '<strong>Xurxo González</strong>'
document.querySelector('#textContent').textContent = 'Xurxo González'

// document.querySelector('#append').textContent = document.querySelector('#append').textContent + 'mundo'
document.querySelector('#append').textContent += 'mundo'

document.querySelector('#prepend').textContent = 'Hola ' + document.querySelector('#prepend').textContent

document.getElementById('value').value = 'Xurxo'

// Funciones

function escribirMensaje (mensaje) {
  btn.value = mensaje
}

// Eventos

const btn = document.querySelector('#click-dblclick')
btn.addEventListener(
  'click',
  () => {
    escribirMensaje('Hice un click')
  }
)

document.querySelector('#click-dblclick').addEventListener(
  'dblclick',
  (event) => {
    event.target.value = 'Hice dos clicks'
  }
)
