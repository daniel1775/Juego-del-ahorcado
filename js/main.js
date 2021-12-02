const secretWord = [    //array con las palabras secretas
   'programacion',
   'desarrollo',
   'maquetacion',
   'interfaz',
   'usuario',
   'frontend',
   'backend',
];
let word = secretWord[Math.floor(Math.random() * secretWord.length)];   //elegir palabra al azar
let state = document.querySelector('.state');
let btnCalcular = document.querySelector('#btnEnviar');
let btnCancelar = document.querySelector('#btnRecargar'); 
let images = document.querySelectorAll('img.draw__imagen');   
let puntajeGanar = 0;
let opportunities = 0;

const generar = () => {                              //generar los <p> donde ira la plabara en el html
   state.innerHTML = '';
   for(let i=0 ; i<word.length ; i++){
      let p = document.createElement('p');
      p.setAttribute('id', 'p' + i);
      state.appendChild(p);
   }
};

generar();

btnCancelar.addEventListener('click', () => {                                      //validar  con el botton el ingreso de caracteres dentro del imput
   word = secretWord[Math.floor(Math.random() * secretWord.length)];
   generar();
   document.getElementById("game-over").innerHTML="<p> </p>";
   puntajeGanar = 0;
   opportunities = 0;
   for(let i=1 ; i<images.length ; i++){
      images[i].style.display = 'none';
   }
   images[0].style.display = 'block';
});

console.log(word);
<<<<<<< HEAD

btnCalcular.addEventListener('click', () => {
   let letra = document.querySelector('#inpEntrada').value.toLowerCase();
   alert(letra);
   
   document.querySelector('#inpEntrada').value = "";
   document.querySelector('#inpEntrada').focus();
   let aux = false;
   for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) == letra) {
         document.getElementById('p' + i).innerHTML = letra;
         puntajeGanar++;
         aux = true;
      }
=======
function SoloLetras(e) {                                                           //funcion para velidar que solo se reciban letras en el imput 
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toString();
   letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';

   especiales = [8, 13];
   tecla_especial = false;
   for (var i in especiales) {
      if (key == especiales[i]) {
         tecla_especial = true;
         break;
      }
   }

   if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      alert('Ingresar solo letras');
      return false;
   }
}

btnCalcular.addEventListener('click', () => {
   let letra = document.querySelector('#inpEntrada').value.toLowerCase();  //convertir la letra ingresada a minuscula
   if (letra != '') {
      document.querySelector('#inpEntrada').value = '';                    // dejar nuevamente el imput vacio
      document.querySelector('#inpEntrada').focus();                       // dejar el selector dentor del imput
      let aux = false;
      for (let i = 0; i < word.length; i++) {                               
         if (word.charAt(i) == letra) {
            document.getElementById('p' + i).innerHTML = letra;            //escirbir la letra sobre el <p> si se acierta
            puntajeGanar++;
            aux = true;
         }
      }

      if (puntajeGanar == word.length) {                                   //contador para ganar el juego
         alert('Ha ganado el juego');
      } else if (aux == false) {
         images[opportunities].style.display = 'none';
         if (opportunities + 1 < images.length) {
            images[opportunities + 1].style.display = 'block';
         }
         opportunities++;
      }
 
      if (opportunities == 6) {                                             //contador para ganar el juego
         alert('Has perdidio el juego');
         opportunities = 0;
         puntajeGanar = 0;
         btnCalcular.disabled = true;
      }
   } else {
      alert('Espacio vacio, por favor digite una letra');                    //validacion caracter null
>>>>>>> 26fe8b0d372b77e8a62f00e04c32afd0032148d6
   }

   if (puntajeGanar == word.length) {
      document.getElementById("game-over").innerHTML="<p>GANASTES</p>";
   } else if (aux==false) {
      images[opportunities].style.display = 'none';
      if(opportunities+1 < images.length){
         images[opportunities+1].style.display = 'block';
      }
      opportunities++;
   }

   if (opportunities == 6) {
      document.getElementById("game-over").innerHTML="<p>GAME OVER</p>";
      opportunities=0;
      puntajeGanar=0;
   }
   
   
});