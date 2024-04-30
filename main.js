
const div1=document.getElementById("div-1");
console.log(div1); //obtienes id

const divCollection = document.getElementsByTagName("div");
console.log(divCollection); //obtienes etiqueta , todos los atributos

const p= document.getElementById("p1");
const usernameInputs=document.getElementsByName("username"); //para loguear en misma linea
//da una coleccion de elementos por su nombre en un array
const usernameInput=usernameInputs[0];
console.log(p,usernameInput);
//Events 
// escuche cualquier elemento
usernameInput.addEventListener("input",(event) => {
    console.log(event.target.value); //target nodo o input donde sucede el evento
    //el value es el valor que contiene adentro en el momento
    //pueden ir más valores
    p.innerText= event.target.value; // añadimos {} porque es una función callback

});
// lo podemos usar en verificación de contraseñas

