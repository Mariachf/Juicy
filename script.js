const btnDireita = document.getElementById('direita');
const btnEsquerda = document.getElementById('esquerda');
const body = document.body;
const img1 = document.getElementById('fruta');
const img2 = document.getElementById('suco');

const colors = ["#A1CD57", "#E3942F", "#7A63B5","#D44444"];

const images1 = ["img/limão.png", "img/orangefruta.png", "img/blackberry fruta.png", "img/strawberryfruta.png"];
const images2 = ["img/sucolimão.png", "img/orange.png", "img/blackberry.png", "img/strawberry.png"];

let currentColorIndex = 0;

function aplicarTema() {
    body.style.backgroundColor = colors[currentColorIndex];
    img1.src = images1[currentColorIndex];
    img2.src = images2[currentColorIndex];
    
}

btnDireita.addEventListener("click", () => {
  currentColorIndex++;
  if (currentColorIndex >= colors.length) currentColorIndex = 0;
  aplicarTema();
});

btnEsquerda.addEventListener("click", () => {
  currentColorIndex--;
  if (currentColorIndex < 0) currentColorIndex = colors.length - 1;
  aplicarTema();
});


aplicarTema();
