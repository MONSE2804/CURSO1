document.addEventListener("DOMContentLoaded", () => {
    const unicoboton= document.getElementById ("botonparticipa")
const frasedelclick= document.getElementById ("frasedeboton")

unicoboton.addEventListener("click", () => {
    frasedelclick.innerHTML= "¡Felicidades! Ganaste un paquete de plumones"
})

} )