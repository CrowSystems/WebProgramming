const sectionSeleccionarAtaque = document.getElementById
('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

 const sectionSeleccionarMascota = document.getElementById
 ('seleccionar-mascota')
 const spanMascotaJugador = document.getElementById('mascota-jugador')

 const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

 const spanVidasJugador = document.getElementById('vidas-jugador')
 const spanVidasEnemigo = document.getElementById('vidas-enemigo')
 
 const sectionMensajes = docoment.getElementById('resultado') 




 class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
 }