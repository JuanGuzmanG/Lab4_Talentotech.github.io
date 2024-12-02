const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("ta_mensaje");
const form = document.getElementById("form");
const validartextos = /^[a-zA-Z\s]{2,}$/;
const validaremail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const tarea = document.getElementById("tarea");
const tareas = document.querySelectorAll(".tarea");
form.addEventListener("submit", e=>{
    e.preventDefault();
    if(nombre.value.length<=1){
        alert("Debe ingresar un nombre en el formulario minimo 2 LETRAS");
    }else if(asunto.value.length<=0){
        alert("asunto vacio");
    }else if(mensaje.value.length<=0){
        alert("debe escribir el mensaje a enviar");
    }else if(email.value.length<=0){
        alert("debe ingresar un correo")
    }else if(!validartextos.test(nombre.value)){
        alert("el nombre no puede contener numeros ni caracteres especiales")
    }else if(!validaremail.test(email.value)){
        alert("el correo no es valido ejemplo: nombre@coreo.com");
    }else{
        alert("enviado correctamente");
    }
});

tareas.forEach(tarea =>{
    tarea.addEventListener('click', () =>{
        tarea.style.textDecoration = "line-through";
    })
})

function ayuda(){
    alert("puedes marcar un hobby o tarea como completada dando clic sobre el")
}
