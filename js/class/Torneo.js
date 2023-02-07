export function Torneo(nombre, maxEquipos, maxJugadores, minEdad ){
    this.nombre =  nombre;
    this.maxEquipos = maxEquipos;
    this.maxJugadores = maxJugadores;
    this.minEdad =minEdad;
    this.equipos= [];
}

Torneo.prototype.agregarEquipo = function (equipo){
    if(this.equipos.length < this.maxEquipos()){
        return false
    }
    else    {
        this.equipos.push(equipo)
        return true
    }
}

Torneo.prototype.getMaxEquipos = function (){
    return this.maxEquipos;
}