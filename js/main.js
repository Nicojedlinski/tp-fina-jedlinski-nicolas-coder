let edad= 23
//edad=30
let nombre= " "

let ingreso
//let Bienvenido/a= prompt ("Welcome") 

//alert ("Bienvenido" + "  " + usuario)

//edad=prompt("que edad tienes ?")

//alert ("eres mayor de 18 ?")

//edad=prompt("si o no ?")

let usuario=prompt ("Ingresa tu Nombre");

if(usuario= " "){
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a"  + usuario);
}

alert ("Bienvenido/a. Responda las siguientes consultas para poder enviarle la propuesta")

let legal= 18

let mail=prompt ("Ingresa un mail");

if(usuario= " "){
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

const nombresDirectorio= [
    { id: 1, nombre: "Pedro Sanchez", edad: 24 },
    { id: 2, nombre: "Raul Gimenez", edad: 24 },
    { id: 3, nombre: "Marcos Esteban", edad: 44 },
    { id: 4, nombre: "Pablo Enrique", edad: 15 },
    { id: 5, nombre: "Lionel Messi", edad: 19},
    { id: 6, nombre: "Mariela Cuccitini", edad: 66 },
  ];


//Funciones de orden superior
//console.log(nombresDirectorio);
nombresDirectorio.forEach((nombre) =>{
console.log(nombre);
});

function buscarNombre(arr, titulo) {
    return arr.find((el) => el.nombre.includes(titulo));
}
function fitrarPelicula(arr, titulo) {
    return arr.filter((el) => el.nombre.includes(titulo));
  }
const encontrada = buscarnombre(nombresDirectorio, "a");
const filtradas = fitrarnombre(nombresDirectorio, "la");

console.log(encontrada);
console.log(filtradas);


//prueba clase dom

const productos = [
    { id: 1, nombre: "arroz integral", precio: 89 },
    { id: 2, nombre: "papa", precio: 90 },
    { id: 3, nombre: "tomate", precio: 204 },
    { id: 4, nombre: "morrón", precio: 870 },
    { id: 5, nombre: "pan", precio: 240 },
    { id: 6, nombre: "fideos", precio: 124 },
    { id: 7, nombre: "fideos", precio: 160 },
    { id: 8, nombre: "arroz", precio: 500 },
    { id: 8, nombre: "arroz", precio: 500 },
    { id: 8, nombre: "arroz", precio: 500 },
    { id: 8, nombre: "arroz", precio: 500 },
  ];
  const personas = [
    "Matias",
    "Pablo",
    "Maria",
    "Tobias",
    "Marcia",
    "Kevin",
    "Karen",
    "Federico",
    "Carolina",
    "Facundo",
    "Camila",
    "Stefi",
    "Augusto",
    "Jessica",
    "Carla",
    "Bautista",
  ];
  
  /* Acceder a DOM  */
  const titulo = document.getElementById("titulo");
  //console.log(titulo);
  
  const tituloSec = document.getElementById("secundario");
  
  //console.log(tituloSec);
  
  const lista = document.getElementsByClassName("lista");
  //console.log(lista);
  
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
  
  //console.log(titulo.innerHTML="<span>HOLA</span>");
  //console.log(tituloSec.innerHTML="HOLA TAROLA")
  
  titulo.className = "card";
  
  const parrafo = document.createElement("p");
  parrafo.innerText = "Soy un parrafo creado en JS";
  conten.appendChild(parrafo);
  
  console.log(parrafo.innerText);
  parrafo.remove();
  //lista[0].remove()
  //document.body.append(parrafo)
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
    nombre: "Papas",
    precio: 450,
  };
  
  let concatenacion =
    "id: " +
    product.id +
    " Producto " +
    product.nombre +
    " Precio:$ " +
    product.precio;
  
  let plantilla = `id: ${product.id} Producto: ${product.nombre} precio $ ${product.precio}`;//interpolación
  console.log(plantilla);
  console.log(concatenacion);
  
  const div2 = document.createElement("div");
  div2.innerHTML = `<div class="card">
  <h3>${product.nombre}</h3>
  <p>Precio $ ${product.precio}</p>
  </div>`;
  
  conten.appendChild(div2)