function encriptar() {
  let texto = document.getElementById("inputText").value.toLowerCase();
  console.log(texto);
  let cifrado = texto.replace(/e/igm, "enter");
  cifrado = cifrado.replace(/o/igm, "ober");
  cifrado = cifrado.replace(/i/igm, "imes");
  cifrado = cifrado.replace(/a/igm, "ai");
  cifrado = cifrado.replace(/u/igm, "ufat");

  document.getElementById('banner').style.display = 'none';
  document.getElementById('leyenda').style.display = 'none';
  document.getElementById('copy').style.visibility = 'visible';
  document.getElementById('copy').style.display = 'flex';
  document.getElementById('result').innerHTML = cifrado;
}

function desencriptar() {
  let texto = document.getElementById("inputText").value.toLowerCase();
  console.log(texto);
  let cifrado = texto.replace(/enter/igm, "e");
  cifrado = cifrado.replace(/ober/igm, "o");
  cifrado = cifrado.replace(/imes/igm, "i");
  cifrado = cifrado.replace(/ai/igm, "a");
  cifrado = cifrado.replace(/ufat/igm, "u");

  document.getElementById('banner').style.display = 'none';
  document.getElementById('leyenda').style.display = 'none';
  document.getElementById('copy').style.display = 'none';
  document.getElementById('copy').style.display = 'inhrerit';
  document.getElementById('result').innerHTML = cifrado;
  
}

function copy(){
  let contenido = document.querySelector('#result');
  contenido.select();
  document.execCommand("copy");
  console.log("se copio");
}


