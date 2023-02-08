export class Torneo {
    constructor(nombre, maxEquipos, maxJugadores, minEdad) {
        this.nombre = nombre;
        this.maxEquipos = maxEquipos;
        this.maxJugadores = maxJugadores;
        this.minEdad = minEdad;
        this.equipos = [];
    }
    agregarEquipo(equipo) {
        if (this.equipos.length < this.maxEquipos) {
            this.equipos.push(equipo);
            return true;
        }
        else {
            return false;
        }
    }
    getMaxEquipos() {
        return this.maxEquipos;
    }
}



