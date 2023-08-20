let turno = "X";
let winner = false;
let cantidadMovimientos = 0;

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const celdas = document.querySelectorAll(".celda");
celdas.forEach((celda) => {
  celda.addEventListener("click", (event) => {
    actualizarTablero(event);
  });
});

function chequearGanador(turno) {
  return combinacionesGanadoras.some((combinacion) => {
    return combinacion.every((index) => celdas[index].textContent === turno);
  });
}

function actualizarTablero(event) {
  cantidadMovimientos++;
  const celda = event.target;
  if (celda.textContent !== "" || winner) return false;
  turno = turno === "X" ? "0" : "X";
  celda.textContent = turno;
  //chequear si hy ganador
  winner = chequearGanador(turno);
  if (winner) {
    document.getElementById("ganador").innerHTML = `<h3>Ganador: ${turno}</h3>`;
  }
  if (cantidadMovimientos === 9 && !winner) {
    document.getElementById("ganador").innerHTML = `<h3>Empate</h3>`;
  }
}

