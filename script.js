// const btn = document.querySelectorAll(".botao");
// const resultado = document.getElementById("resultado");

function insert(num) {
  document.getElementById("resultado").innerHTML += num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  }
}
