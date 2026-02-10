function aceptar() {
  document.getElementById("pantalla1").style.display = "none";
  document.getElementById("pantalla2").style.display = "block";

  const musica = document.getElementById("musica");
  musica.play();

  setInterval(crearCorazon, 400);
}

function moverBoton() {
  const b = document.querySelector(".no");
  b.style.left = Math.random() * 300 + "px";
  b.style.top = Math.random() * 300 + "px";
}

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('heart');
    corazon.innerHTML = '💖';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = Math.random() * 10 + 15 + 'px';

    document.body.appendChild(corazon);

    setTimeout(() => {
    corazon.remove();
    }, 5000);
}