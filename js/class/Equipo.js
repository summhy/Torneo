export class Equipo {
    constructor(nombre, poblacion) {
        this.nombre = nombre
        this.poblacion = poblacion
        this.jugadores = []
    }
    agregarJugador(jugador, maxJugador) {
        if (this.jugadores.length < maxJugador) {
            this.jugadores.push(jugador)
            return true
        }else{
            return false
        }
    }
}

