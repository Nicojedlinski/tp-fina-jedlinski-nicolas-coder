let edad= 23
//edad=30
let nombre= " "

let ingreso
//let Bienvenido/a= prompt ("Welcome") 

//alert ("Bienvenido" + "  " + usuario)

//edad=prompt("que edad tienes ?")

//alert ("eres mayor de 18 ?")

//edad=prompt("si o no ?")

/*let usuario=prompt ("Ingresa tu Nombre");

if(usuario= " "){
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a"  + usuario);
}

alert ("Bienvenido/a. Responda las siguientes consultas para poder enviarle la propuesta")

let legal= 18

let mail=prompt ("Ingresa un mail");

/*if(usuario= " "){
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a"  + mail);
}

//if(legal <18){
    //console.log("sos menor.No podes adquirir los servicios.Consultalo con un mayor");
//}else{
    //console.log("sos mayor. Podes adquirir los servicios");
//}

let num = parseInt(prompt("ingresa tu edad"))
    let mayoredad=num >18;
    console.log(mayoredad);

    if(isNaN(num)){
    alert("el valor ingresado no es un numero")

    while (num != "num"){
        num= alert("el valor ingresado no es un numero")
    }
}

if(mayoredad <=18){
    console.log("sos mayor. Podes adquirir los servicio");
}else{
    console.log("sos menor.No podes adquirir los servicios.Consultalo con un mayor");
}

let si=prompt ("Deseas contratar los servicios");

if(si= "si"){
    console.log("Gracias por elegirnos" + usuario + "en breve se comunicaran con vos");
}

//alert ("Gracias Por tu respuesta, en breve se comunicaran con vos")


alert("Respondiste todo")
alert("Next")
alert("ya falta menos ...")

for(let i=0; i<1; i++){
    let pregunta=prompt("Respondio ?")
    if (respuesta ="no"){
        respuesta="Responda Nuevamente el cuestionario"
        alert(pregunta)
    }else{
        respuesta= "Pronto se le enviaran las opciones disponibles a su casilla de corre. puede ser enviado a su spam"
        alert(respuesta)
    }
}

let ingreso1= prompt('ingresa una opcion \n 1-volver al inicio \n 2- finalizar')

switch (ingreso1){
    case '1':
        alert('seleccionaste volver al inicio')
        break;
    case '2':
        alert('seleccionaste finalizar')
        break;

    default:
        break;
}

alert ("En breve se comunicaran con vos. Atte el equipo Nico's")

function saludar(){
    console.log("Hola Nico");
}

for(let i=0; i<1; i++);{
    saludar()
}
function saludopersonalizado(nombre){
    console.log("hola" + nombre);
}

saludopersonalizado ("nombre")
saludopersonalizado ("Pablo")
saludopersonalizado ("Julieta")
saludopersonalizado ("Roberto")

for (let i=0; i<1; i++){
    let ingreso1 = prompt ('ingresa tu usuario')

    saludopersonalizado(usuario)
}

const contacto= {
    nombre:"Pedro",
    apellido:"Perez",
    telefono:"1122425678",
}

console.table(contacto["nombre"]);
console.table(contacto["apellido"]);
console.table(contacto["telefono"]);

const contacto1= {
    nombre:"Lionel",
    apellido:"Messi",
    telefono:"1140506998",
    direccion:"Calle falsa 321",
}

console.table(contacto1);

contacto.direccion= 'av de los picantes 123'

console.log(contacto.direccion);

//Molde
function Contrato (formato, duracion, precio, stock){
this.formato = formato;
this.duracion = duracion;
this.precio = parseFloat(precio);
this.stock = stock;
//Metodo personalizado
this.vender = function(cant) {
    return this.precio * cant;
};
}

const Contrato1= new Contrato ("Pack 1", "doce meses", 3000, 3)

console.log(Contrato1);
console.log(Contrato1.formato);
console.log(Contrato1.duracion);
console.log(Contrato1.precio);
console.log(Contrato1.stock);

const Contrato2 = new Contrato ("Pack 2", "cinco meses", 1200, 1)
console.log(Contrato2);
console.log(Contrato2.formato);
console.log(Contrato2.duracion);
console.log(Contrato2.precio);
console.log(Contrato2.stock);

console.log("El total de la venta del contrato"+ Contrato1.formato+ "por dos unidades es : $"+ Contrato1.vender(2));


const mensaje= "Sr Nicolas"

console.log(mensaje.length);
console.log(mensaje.toLocaleUpperCase);
console.log(mensaje.toLocaleLowerCase);

console.log("formato" in Contrato1);
for (const key in Contrato1) {
    console.log(key);
}

//paquetes - uso de arrays
const paquetes=["basico","premium","gold","busines"];
console.log(paquetes);
console.log(paquetes.length);

for(const paquete of paquetes){
    console.log(paquete);
}

// funciones del orden suoerior 
function mayorQue (n) {
    return (m) => m > n
}

let mayorQueDiezyOcho = mayorQue(18) // 18 el valor de n

console.log(mayorQueDiezyOcho(18)); // true // 18 seria m
console.log(mayorQueDiezyOcho(5)); // false // 5 seria m

// asignando operador (op)
function asignarOperador(op) {
    if (op == "sumar"){
        return(a, b) => a + b
    }else if (op == "restar"){
        return (a, b) => a - b
    }else if (op == "multiplicar"){
        return (a, b) => a* b
    }
}

const suma = asignarOperador("sumar")
const restar = asignarOperador ("restar")
const multiplicar = asignarOperador ("multiplicar")

console.log(); // aplicar la funcion

const packElegir = [
    {
        id:1,
        nombre: "premium",
        precio: 4000,
        temas: 'ayuda, muestarior de proyecto y mas',
    },
    {
        id: 2,
        nombre: "gold",
        precio: 8900,
        temas: 'pack mas requerido donde se aborda y muestra todo',
    }
] 
packElegir.forEach((el)=>{
    console.log(el.precio);
})
packElegir.forEach((el)=>{
    console.log(el.nombre);
})

console.log("usted esta adquiriendo los siguientes productos");
packElegir.forEach((el) => {
    console.log(el.nombre + " - $" + el.precio)
})




  
  /* Acceder a DOM  */
  const titulo = document.getElementById("pack");
  //console.log(titulo);
  
  const tituloSec = document.getElementById("precio");
  
  //console.log(tituloSec);
  
  const paises = document.getElementsByClassName("pais");
  //console.log(paises[0]);
  /* console.log(paises[1]);
  console.log(paises[2]);
  console.log(paises[3]);
  console.log(paises[4]);
  console.log(paises[5]);
  console.log(paises[6]); */
  
  const div = document.getElementsByTagName("div");
  //console.log(div);
  const conten = document.getElementById("contenedor");
  //console.log(conten);
  //recorrer
  for (const pais of paises) {
    //console.log(pais.innerText);
  }
  paises[5].innerText = "GERMANY";
  
  console.log(parrafo.innerText);
  parrafo.remove();

  console.log(personas);
  
  personas.push("Gabriela", "Roxana");
  for (const persona of personas) {
    const li = document.createElement("li");
  
    li.innerText = persona;
    lista[1].appendChild(li);
  }
  //hacer con el array productos
  
  let product = {
    id: 1,
    nombre: "gold",
    precio: 2000,
  };
  
  let packElegir =
    "id: " +
    product.id +
    " Producto " +
    product.nombre +
    " Precio:$ " +
    product.precio;
  
  let plantilla = `id: ${product.id} Producto: ${product.nombre} precio $ ${product.precio}`;//interpolación
  console.log(plantilla);
  console.log(packElegir);
  
  const div2 = document.createElement("div");
  div2.innerHTML = `<div class="card">
  <h3>${product.nombre}</h3>
  <p>Precio $ ${product.precio}</p>
  </div>`;
  
  conten.appendChild(div2) 


  const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
const contenedor = document.querySelector("#contenedor");

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
function crearHtml(arr) {
  contenedor.innerHTML = "";
  let html;
  for (const el of arr) {
    html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-delete" id="${el.id}">Quitar</button>
                  </div>
              </div>`;
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}

btnSearch.addEventListener("click", (e) => {
  const filtrados = filtrarServicio(servicios, inputIngreso.value);
  crearHtml(filtrados);
});
//evento submit
const formulario = document.querySelector("#form-login");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log("Formulario enviado");
});

//localStorage
localStorage.setItem("saludo", "Hola tarola");
localStorage.setItem("edad", 40);
localStorage.setItem("numeros", [1, 2, 3, 4, 5, 6, 7]);
localStorage.setItem("darkMode", true);

const pack = localStorage.getItem("pack");
const age = localStorage.getItem("age");
const mododOscuro = localStorage.getItem("darkMode") == "true";
const numerosGuardados = localStorage.getItem("numeros").split(",");
/* console.log(saludo);
console.log(edad);
console.log(mododOscuro);
console.log(numerosGuardados); */

sessionStorage.setItem("visitante", true);

const visitante = sessionStorage.getItem("visitante");
/* console.log(visitante); */

localStorage.removeItem("pack");
//localStorage.clear()
const user = { nickname: "Nico", pass: 12345678 };
/* console.log(user.nickname); */
const userJson = JSON.stringify(user);
localStorage.setItem("user", userJson);

const userDesdeStorage = JSON.parse(localStorage.getItem("user"));
/* console.log(userDesdeStorage.nickname); */
const carrito = [];

carrito.push(servicios[0]);
carrito.push(servicios[5]);
localStorage.setItem("carrito", JSON.stringify(carrito));

const btnMostrar = document.querySelector(".btn.btn-buscar");
const btnLimpiar = document.querySelector(".btn.btn-limpiar");

btnMostrar.addEventListener("click", () => {
  const arrServ = JSON.parse(localStorage.getItem("carrito"));
  console.log(arrServ);
  crearHtml(arrServ);
});
btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
});



const packs = [
    { id: 1, nombre: "pack premium", precio: 3000, },
    { id: 2, nombre: "pack gold", precio: 2000,  },
    { id: 3, nombre: "pack silver", precio: 1200, },
];


document.addEventListener("DOMContentLoaded", () => {
    const pack = document.querySelectorAll(".pack");
    const carrito = document.getElementById("carrito");

    productos.forEach((pack) => {
        const botonAgregar = pack.querySelector(".agregar");
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(pack);
        });
    });

    function agregarAlCarrito(pack) {
        const nombreProducto = pack.querySelector("h2").textContent;
        const precioProducto = parseFloat(producto.querySelector("p").textContent.replace("$", ""));
        
        const elementoCarrito = document.createElement("div");
        elementoCarrito.classList.add("item-carrito");
        elementoCarrito.innerHTML = `
            <p>${nombreProducto} - $${precioProducto.toFixed(2)}</p>
            <button class="eliminar">Eliminar</button>
        `;

        const botonEliminar = elementoCarrito.querySelector(".eliminar");
        botonEliminar.addEventListener("click", () => {
            elementoCarrito.remove();
        });

        carrito.appendChild(elementoCarrito);
    }
});

































