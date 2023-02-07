export function Equipo(nombre, poblacion){
    this.nombre = nombre
    this.poblacion =  poblacion
    this.jugadores=[]
}

Equipo.prototype.agregarJugador = function (jugador){
    this.jugadores.push(jugador)
}