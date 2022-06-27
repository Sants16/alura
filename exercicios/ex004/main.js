const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
  
//   tecla.addEventListener('keydown', function(){
//     if(evento.code === "Enter" || evento.code === "Space") {
//         tecla.classList.add('ativa');
//         }
//   });

//   tecla.addEventListener('keyup', function (){
//     tecla.classList.remove('ativa');
//   })
}