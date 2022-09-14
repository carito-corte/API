
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const inputCorreo = document.querySelector('#correo')
const inputClave = document.querySelector('#clave')
button.addEventListener('clik',(e)=>{ 
    const nombre=inputNombre.value 
    const apellido= inputApellido.value
    const correo=inputCorreo.value
    const clave=inputClave.value
fetch('/api/v1',{
    method:'POST',
    headers:{
        'Content Type': 'application/json'
    },
    body: JSON.stringify({
        nombre,
        apellido,
        correo,
        clave,
    }),
})
})