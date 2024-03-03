const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//'la letra "e" es convertida para "enter"'
//'la letra "i" es convertida para "imes"'
//'La letra "a" es convertida para "ai"'
//'La letra "o" es convertida para "ober"'
//'La letra "u" es conevrtida para "ufat"'

function btnEncriptar() {
  const textoEncriptado = encriptar(texArea.value);
  mensaje.value = textoEncriptado;
  texArea.value = "";
  mensaje.style.background = "none";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}


