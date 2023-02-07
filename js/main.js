import {Jugador} from './class/Jugador.js'
import {Torneo} from './class/Torneo.js'
import {Equipo} from './class/Equipo.js'
let torneo;
// Campos Torneo
const btnCrearTorneo = document.querySelector('#btnCrearTorneo');
const txtNombreTorneo = document.querySelector('#txtNombreTorneo');
const txtMaxEquipos = document.querySelector('#txtMaxEquipos');
const txtMaxJugadores = document.querySelector('#txtMaxJugadores');
const txtMinEdad = document.querySelector('#txtMinEdad');


btnCrearTorneo.addEventListener('click', function (){
    torneo = new Torneo(txtNombreTorneo.value, 
                             txtMaxEquipos.valueAsNumber, 
                             txtMaxJugadores.valueAsNumber, 
                             txtMinEdad.valueAsNumber)
      const messi = new  Jugador('1-9', 'Leonel','Messi', 1986, false)

  })


// Campos Equipo
const btnCrearEquipo = document.querySelector('#btnCrearEquipo');
const txtNombreEquipo = document.querySelector('#txtNombreEquipo');
const txtPoblacion = document.querySelector('#txtPoblacion');

btnCrearEquipo.addEventListener('click', event => {
    if(torneo.equipos.length < torneo.getMaxEquipos()){
        torneo.agregarEquipo(new Equipo(txtNombreEquipo.value, 
                                    txtPoblacion.value));
    }else{
       alert('Maximo equipos superado')
    }
    

    console.log(event);
    console.log(torneo)
})





const t = new Torneo('sdfds',1,1,1);
console.log(t.getNombre())
console.log(t)