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
}

const Contrato1= new Contrato ("Pack 1", "doce meses", 3000, 3)

console.log(Contrato1);
console.log(Contrato1.formato);
console.log(Contrato1.duracion);
console.log(Contrato1.precio);
console.log(Contrato1.stock);


const mensaje= "Sr Nicolas"

console.log(mensaje.length);
console.log(mensaje.toLocaleUpperCase);
console.log(mensaje.toLocaleLowerCase);
