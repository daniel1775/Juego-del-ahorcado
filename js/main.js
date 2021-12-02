const secretWord = [
   'programacion',
   'desarrollo',
   'maquetacion',
   'interfaz',
   'usuario',
   'frontend',
   'backend',
];
let word = secretWord[Math.floor(Math.random() * secretWord.length)];
let state = document.querySelector('.state');
let btnCalcular = document.querySelector('#btnEnviar');
let btnCancelar = document.querySelector('#btnRecargar');
let images = document.querySelectorAll('img.draw__imagen');
let puntajeGanar = 0;
let opportunities = 0;

const generar = () => {
   state.innerHTML = '';
   for (let i = 0; i < word.length; i++) {
      let p = document.createElement('p');
      p.setAttribute('id', 'p' + i);
      state.appendChild(p);
   }
};

generar();

btnCancelar.addEventListener('click', () => {
   word = secretWord[Math.floor(Math.random() * secretWord.length)];
   btnCalcular.disabled = false;
   generar();
   puntajeGanar = 0;
   opportunities = 0;
   for (let i = 1; i < images.length; i++) {
      images[i].style.display = 'none';
   }
   images[0].style.display = 'block';
});

console.log(word);
function SoloLetras(e) {
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
   let letra = document.querySelector('#inpEntrada').value.toLowerCase();
   if (letra != '') {
      document.querySelector('#inpEntrada').value = '';
      document.querySelector('#inpEntrada').focus();
      let aux = false;
      for (let i = 0; i < word.length; i++) {
         if (word.charAt(i) == letra) {
            document.getElementById('p' + i).innerHTML = letra;
            puntajeGanar++;
            aux = true;
         }
      }

      if (puntajeGanar == word.length) {
         alert('Ha ganado el juego');
      } else if (aux == false) {
         images[opportunities].style.display = 'none';
         if (opportunities + 1 < images.length) {
            images[opportunities + 1].style.display = 'block';
         }
         opportunities++;
      }

      if (opportunities == 6) {
         alert('Has perdidio el juego');
         opportunities = 0;
         puntajeGanar = 0;
         btnCalcular.disabled = true;
      }
   } else {
      alert('Espacio vacio, por favor digite una letra');
   }
});
