//console.log('documentTitle',document.title);
let value;
value = document;
//console.log(document)
const nuevoTitulo = document.querySelector('h2') 
nuevoTitulo.innerHTML = 'Generasión 1 Pokimon'
const newBackground = document.getElementById("gen-1");
newBackground.style.background = '#f00';
value = document.URL;
//console.log(value)
value = document.domain;
//console.log(value)
const nodoImagenes = document.querySelectorAll("img-fixed img-sprite")
const nuevoSRC = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const nodosDeImagen = document.querySelectorAll("img");
    for (let i=0; i< nodosDeImagen.length; i++) {
        nodosDeImagen[i].setAttribute ('src', nuevoSRC)
    } 

console.log(nodosDeImagen)
