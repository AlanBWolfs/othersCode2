var formulario = document.querySelector('#form');

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var name = formulario.elements[0]
  var edad = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = name.value
  var edad = edad.value
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

if (nombre.length > 0 
  && (edad >= 18 
    && edad <= 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// Se elimina código repetido

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

// Se elimina código repetido

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
spanNombre.classList.add("descripcion")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ":"
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}
function crearNombre(nombre) {
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
inputNombre.value = nombre 
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
inputNombre.classList.add("nombre-invitado")
}


crearNombre(nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}