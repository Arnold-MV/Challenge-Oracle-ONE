/* 
a - ai
e - enter
i - imes
o - ober 
u - ufal
*/

var botonEncriptar = document.querySelector("#bt-encriptar");
var botonDesencriptar = document.querySelector("#bt-desencriptar");
var botonCopiar = document.querySelector("#bt-copiar");
var areaMunheco = document.querySelector("#area-munheco");
var areaMensaje = document.querySelector("area");

var aparecerBt = document.querySelector("#bt-copiar");
var resultado = document.querySelector("#texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar() {
  ocultarAdelante();
  validarMensaje();
  resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar() {
  ocultarAdelante();
  resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto() {
  var area = document.querySelector("#area");
  return area.value;
}

function ocultarAdelante() {
  areaMunheco.classList.add("ocultar");
  aparecerBt.classList.add("aparecer");
}

//ENCRIPTAR

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufal";
    } else {
      textoFinal = textoFinal + texto[i];
    }
    resultado.value = textoFinal;
  }
  return textoFinal;
}

//DESENCRIPTAR
function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
    resultado.value = textoFinal;
  }

  return textoFinal;
}

//COPIAR

function copiar() {
  let textoFinal = resultado.value;
  navigator.clipboard.writeText(textoFinal);
}

//VALIDACION DE MENSAJE
var inputMensaje = document.querySelector(".num1");
var contenedorErrores = document.querySelector("#contenedor-errores");
function validarMensaje() {
  // Borrar errores previos
  let erroresPrevios = contenedorErrores.querySelectorAll(".error");
  for (let err of erroresPrevios) {
    contenedorErrores.removeChild(err);
  }
  var mensaje = inputMensaje.value;
  let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
  let mensajeError = document.createDocumentFragment();
  for (let letra of mensaje) {
    if (!letrasValidas.includes(letra)) {
      alert(`La letra ${letra} no es válida`);
    }
  }
  contenedorErrores.appendChild(mensajeError);
  if (contenedorErrores.children.length === 0) {
    return true;
  }
  return false;
}
