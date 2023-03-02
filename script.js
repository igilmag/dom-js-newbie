/* eslint-disable no-useless-return */
'use strict'

import { classListEdit } from './functions.js'

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

const pegarTexto = (textoAPegar) => {
  document.querySelector('#destino').textContent += textoAPegar
}

function visibilidadInfo (display) {
  document.querySelector('.oculto').style.display = display
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

document.getElementById('copiar').addEventListener('click', () => {
  const origenEL = document.querySelector('.origen')
  // Validamos que haya texto copiar
  if (origenEL.value.trim().length < 1 || origenEL.value.trim() === '') return

  pegarTexto(origenEL.value)
})

document.querySelector('#cdn').addEventListener('click', () => {
  visibilidadInfo('block')
})

document.querySelector('.cerrar').addEventListener('click', () => {
  visibilidadInfo('none')
})

document.querySelector('#addClass').addEventListener('click', () => {
  classListEdit(true)
})

document.querySelector('#removeClass').addEventListener('click', function () {
  classListEdit(false)
})
