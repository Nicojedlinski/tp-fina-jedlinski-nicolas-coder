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




// prueba 1

document.title = "Clase 14 | Comisión 47020";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 14";
tituloSecundario.innerText = "Librerías";

const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");

btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: 'Borrar producto?',
    text: "Esta accion no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      //FUncion para eliminar el producto
      Swal.fire(
        'Producto eliminado!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
});

btnToast.addEventListener("click", () => {
  Toastify({
    text: "Producto agregado al carrito",
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
});

const btnCalcular = document.querySelector("#calcular");
let dates = document.querySelectorAll('input[type="date"]');

const DateTime= luxon.DateTime

let ahora= DateTime.now()
/* console.log(ahora);
console.log(ahora.toString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
//titulo.innerText=ahora.toLocaleString(DateTime.DATE_FULL)
console.log(ahora.setLocale("es").toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(ahora.setLocale("es").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(ahora.toLocaleString(DateTime.TIME_24_SIMPLE));
console.log(ahora.setLocale("ko").toLocaleString(DateTime.DATE_FULL)); */

let inicio= DateTime.now().toFormat('yyyy-MM-dd')
let fin= DateTime.now().plus({months:4}).toFormat('yyyy-MM-dd')
dates.forEach(el=>{
  el.setAttribute("min", inicio)
  el.setAttribute("max", fin)
})
function calcularEstadia(checkIn, checkOut){
  let total= checkOut.diff(checkIn)
  return total.as('days')
}
//armar una funcion que calcule la estadia
btnCalcular.addEventListener('click',()=>{
  let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
  let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);
let estadia=calcularEstadia(checkIn,checkOut)
let precioTotal = estadia * 12000
console.log(precioTotal);
Swal.fire({
  title: "Resultado",
  text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
  icon: "info",
  iconColor: "#00ff00",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  position: "top-center",
  backdrop: "#445566aa",
});
})








// prueba 2

document.title = "Clase 15 | Comisión 47020";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 15";
tituloSecundario.innerText = "Asincronía y promesas";
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(4);

/* console.log("Inicio sesion");
setTimeout(()=>{
  console.log("Carga bandeja de entrada");
}, 0)
console.log("Pagina de carga"); */

/* for (const iterator of "Hola") {
  setTimeout(()=>{
    console.log(iterator);
  }, 2500)
}
for (const iterator of "tarola") {
  console.log(iterator);
} */

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");
});
/* setInterval(()=>{
  console.log("Hola");
},1000) */
//Promesas
const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (res === true) {
      resolve("Toma tu compact");
    } else {
      reject("No te devuelvo el compact");
    }
  });
};

console.log(eventoFuturo(false));

const pedirHamburguesa = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res
        ? resolve("Veni retirar tu pedido")
        : reject("Nos quedamos sin papas");
    }, 2500);
  });
};
/* 
console.log(pedirHamburguesa(true));
console.log(pedirHamburguesa(false)); */
pedirHamburguesa(true)
.then((response) => {
  console.log(response);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
  console.log('Gracias vuelva pronto');
});




//prueba carrito relojes

//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}

//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}



















