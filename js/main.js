import { Jugador } from "./class/Jugador.js";
import { Torneo } from "./class/Torneo.js";
import { Equipo } from "./class/Equipo.js";
let torneo;
// Campos Torneo
const btnCrearTorneo = document.querySelector("#btnCrearTorneo");
const txtNombreTorneo = document.querySelector("#txtNombreTorneo");
const txtMaxEquipos = document.querySelector("#txtMaxEquipos");
const txtMaxJugadores = document.querySelector("#txtMaxJugadores");
const txtMinEdad = document.querySelector("#txtMinEdad");

btnCrearTorneo.addEventListener("click", function () {
  torneo = new Torneo(
    txtNombreTorneo.value,
    txtMaxEquipos.valueAsNumber,
    txtMaxJugadores.valueAsNumber,
    txtMinEdad.valueAsNumber
  );
  btnCrearTorneo.disabled = true;
});

// Campos Equipo
const btnCrearEquipo = document.querySelector("#btnCrearEquipo");
const txtNombreEquipo = document.querySelector("#txtNombreEquipo");
const txtPoblacion = document.querySelector("#txtPoblacion");

btnCrearEquipo.addEventListener("click", (event) => {
  if (
    torneo.agregarEquipo(new Equipo(txtNombreEquipo.value, txtPoblacion.value))
  ) {
    alert("Equipos inscrito");
  } else {
    alert("Maximo equipos superado");
  }
  btnCrearEquipo.disabled = true;
});

const btnCrearJugador = document.getElementById("btnCrearJugador");

btnCrearJugador.addEventListener("click", () => {
  let ultimoEquipo = torneo.equipos[torneo.equipos.length - 1];
  if (
    ultimoEquipo.agregarJugador(
      new Jugador(
        document.querySelector("#txtRut").value,
        document.querySelector("#txtNombre").value,
        document.querySelector("#txtApellido").value,
        document.querySelector("#intNacimiento").value,
        document.querySelector("#ckCapitan").checked
      )
    , torneo.maxJugadores)
  ) {
    alert("Jugador Inscrito");
  } else {
    alert("Excede máximo Jugadores");
  }

  console.log(torneo);
});
/* 
document.querySelector('#exportar').addEventListener('click', event => {
    document.querySelector('#divJson').innerHTML = JSON.stringify(torneo);
}) */
