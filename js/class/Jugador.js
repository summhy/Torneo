export function Jugador(rut, nombre, apellido, nacimiento, capitan){
    this.rut = rut
    this.nombre = nombre
    this.apellido = apellido
    this.nacimiento = nacimiento //año
    this.capitan = capitan
}


Jugador.prototype.esMayor = function(edadMin){
    //Pendiente, implementar validad edad por fecha de nacimiento
    let annioActual = new Date()

    if(annioActual.getFullYear() - this.nacimiento >= edadMin){
        return true
    }else{
        return false
    }
}

