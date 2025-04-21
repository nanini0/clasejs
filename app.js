document.write("<h1> hola mundo <h1>");

/* comentario : trabajar con la console */
//comentario de una sola linea 


console.log("datos de js");

//tipos de datos

let saludo = "hola mundo";

console.log(saludo);

//array 
let nombres=['ana','jose','carlos'];
console.log(nombres);
//objeto 
let objeto = {nombre:'juan',edad:13,notas:[2.5,4,6]}

console.log(objeto);


let num1 = 1;
let num2 = 30;

let resultado = num1 + num2;

console.log("la suma es ",resultado);

let nombre="Carlos";
let apellido="Leon";

let nombre_completo = nombre +" "+ apellido;
console.log(nombre_completo)

document.write("</br>"+"nombre"+" " + nombre_completo)

/* 
!= distinto
== comparacion
===

*/

let one =1;
let one_again="uno";

let comparar = one === one_again;
console.log(comparar)

// if 

let uno = 1;
let dos = '1';

if (uno ===dos){
    console.log("gg")
}else{
    console.log("asdasdas")
}

let tipoAlumno = "diurno";

switch(tipoAlumno){
    case "diurno":
        console.log("dia breooo")
            break;
    case "vespertino":
        console.log("noche breoo")
            break;
    default:
        console.log("no es alumno")
}

//ciclos

// muestre los 10 priemros numeros positivos 
//while
let i =0;
while ( i < 10){
    console.log(i)
    i++;
}


//for
let nom =["ana","maria","jesus"]

for (let w=0; w<nom.length;w++){
    console.log(nom[w])
}

for (let x in nom){
    console.log(nom[x])

}