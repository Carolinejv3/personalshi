/*

MÓDULO 2

CAMBIO DE VALOR EN LAS VARIABLES:

let dolar = 100;
console.log(dolar);
dolar = 120;
console.log(dolar);
dolar = dolar + 200;
console.log(dolar);
dolar = dolar + 500;
console.log(dolar);

CONSTANTES

(Nunca pueden cambiarse porque sirven para preservar variables que no deberían ser cambiadas
mientras se use ese código)

    const greeting = "Hello!";

ALCANCE Y BLOQUES DE PROGRAMA
    
let contador;
console.log(contador); // -> undefined
{
    contador = 1;
    console.log(contador); // -> 1
}
contador = contador + 1;
console.log(contador); // -> 2

SANGRÍA Y BLOQUES

let contador;
console.log(contador);
{
    contador = 4;
    {
        console.log(contador);
    }
}
contador = contador + 1;
console.log(contador);

Si declaramos una variable dentro de un bloque (llaves) fuera de este no será identificable,
pero fuera de este se convertirá en una variable global

let altura = 180;
{
    let peso = 70;
    console.log(altura);
    console.log(peso);
}
console.log(altura);
console.log(peso); 


OTRO EJEMPLO: 

let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
    }
 }

Si la variable se declara con "var", fuera del bloque también será global, a diferencia de LET
y CONST. Sólo se debería de usar "var" dentro de una función.


var fruta = 'chinola';
{
    var vegetal = 'brocoli';
    console.log(fruta);
    console.log(vegetal);
}
console.log(fruta);
console.log(vegetal);

LA FUNCIÓN

sirve para llamar un pedazo de código que queremos reutilizar para evirtar el aumento innecesario
de código. Solo hace falta llamarla y sea cual sea su función, se ejecutará en donde se llame.

en vez de hacerlo así:

console.log("artistas favoritos:"); 
console.log("BTS"); 
console.log("Kendrick"); 
console.log("artistas que me han gustado desde niña:");
console.log("BTS"); 
console.log("Kendrick"); 
console.log("artistas que más escucho:"); 
console.log("BTS"); 
console.log("Kendrick");  

podemos hacerlo así;

function artistas() {
    console.log("BTS");
    console.log("Kendrick");
}

console.log("artistas favoritos:");
artistas();
console.log("artistas que me han gustado desde niña:");
artistas();
console.log("artistas que más escucho:");
artistas();

Otro ejemplo es el siguiente, en donde declaramos una variable global y una local. La local fue declarada
dentro de un bloque, por lo tanto, fuera de este será indetectable.

var comidamenosfavglobal = "pasta ";

function testFunction() {
    var comidafavlocal = "donas";  
    console.log("comida favorita:");
    console.log(comidamenosfavglobal);
    console.log(comidafavlocal);
}

testFunction();

console.log("comida menos favorita:");
console.log(comidamenosfavglobal);
console.log(comidafavlocal);

en el próximo ejemplo vemos que al declarar una variable dentro de un bloque hacemos lo que se llama
var shadowing que nos permite usar una variable de forma global y local. Aunque no es tan refcomendable
en casos extremadamente necesarios se puede usar este método. 

let cama = 100;
console.log(cama);

{
let cama = 200;
console.log(cama);
}

console.log(cama);

el intérprete de JavaScript busca todas las declaraciones de variables y las mueve al principio
del alcance en el que fueron declaradas (al principio del programa si son globales, al principio
del bloque si es una declaración let local, o al principio de la función si es una declaración
var local).

En JavaScript existe un fenómeno que llamado HOISTING que se basa en que en algunos casos no es estrictamente
necesario declarar una variable como tal, aunque es lo más recomendable. ej:

var peso;
var altura = 180;
console.log(altura);  // -> 180
console.log(peso);  // -> undefined
peso = 70;
console.log(peso);  // -> 70

Aquí podemos ver que la variable "peso" no fue inicializada como debía desde un principio, pero 
al final no da error. Esto se debe al HOISTING.

TAREA-TAREA-TAREA-TAREA-TAREA-TAREA-TAREA-TAREA-TAREA-TAREA

Juguemos a la floristería. Declare seis variables, recordando nombrarlas de acuerdo a su propósito:

    el precio de una sola rosa (8) y la cantidad de rosas que tienes (70)
    el precio de un solo lirio (10) y la cantidad de lirios que tienes (50)
    el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)

Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, 
en las que colocas su precio total. Inserte los valores correspondientes en las variables 
utilizando las variables declaradas en el paso anterior. Finalmente, declare una variable en la
que almacene el precio de todas sus flores (nuevamente, use las variables anteriores para la 
inicialización)

REALIZACIÓN DEL PRIMER EJERCICIO:

let roseprice = 8;
let lilyprice = 10;
let tulipprice = 2;

let numberroses = 70;
let numberlilys = 50;
let numbertulips = 120;

let totalrosesprice = roseprice * numberroses;
let totallilysprice = lilyprice * numberlilys;
let totaltulipsprice = tulipprice * numbertulips;

let totalflowers = totalrosesprice + totallilysprice + totaltulipsprice;

console.log ("Rosa - precio de unidad:", roseprice, ", cantidad:", numberroses, ", total:", totalrosesprice);
console.log ("Lilas - precio de unidad:", lilyprice, ", cantidad:", numberlilys, ", total:", totallilysprice); 
console.log ("Tulipanes - precio de unidad:", tulipprice, ", cantidad:", numbertulips, ", total:", totaltulipsprice);



REALIZACIÓN DEL SEGUNDO EJERCICIO:

Modifique el código del ejemplo anterior. Suponga que los precios de las flores serán constantes 
(no cambiarán). Declare e inicialice las variables restantes de la misma manera que en el ejemplo 
anterior. Muestra toda la información recopilada en la consola. Ahora disminuya el número de 
rosas en 20 y el de lirios en 30. Vuelva a mostrar toda la información recopilada en la consola.

const roseprice = 8;
const lilyprice = 10;
const tulipprice = 2;

let numberroses = 70;
let numberlilys = 50;
let numbertulips = 120;

let totalrosesprice = roseprice * numberroses;
let totallilysprice = lilyprice * numberlilys;
let totaltulipsprice = tulipprice * numbertulips;

let totalflowers = totalrosesprice + totallilysprice + totaltulipsprice;

console.log ("Rosa - precio de unidad:", roseprice, ", cantidad:", numberroses, ", total:", totalrosesprice);
console.log ("Lilas - precio de unidad:", lilyprice, ", cantidad:", numberlilys, ", total:", totallilysprice); 
console.log ("Tulipanes - precio de unidad:", tulipprice, ", cantidad:", numbertulips, ", total:", totaltulipsprice);
console.log ("Total: ", totalflowers);

numberroses = numberroses - 20;
numberlilys = numberlilys - 30;

totalrosesprice = roseprice * numberroses;
totallilysprice = lilyprice * numberlilys;
totaltulipsprice = tulipprice * numbertulips;

totalflowers = totalrosesprice + totallilysprice + totaltulipsprice;

console.log ("Rosa - precio de unidad:", roseprice, ", cantidad:", numberroses, ", total:", totalrosesprice);
console.log ("Lilas - precio de unidad:", lilyprice, ", cantidad:", numberlilys, ", total:", totallilysprice); 
console.log ("Tulipanes - precio de unidad:", tulipprice, ", cantidad:", numbertulips, ", total:", totaltulipsprice);
console.log ("Total: ", totalflowers);


TIPOS DE VARIABLES Y SUS CONVERSIONES.

- Los numeros se dividen entre integer y numeros reales
- Los tipos de datos se dividen de primitivo (o simple) y complejo (o compuesto)
- Las variables simples son aquellas que usamos normalmente: booleano, integer, string...
- Los literales son una forma de representar una variable, ya sea tipo numérico, etc...
todas las variables tienen su propio literal
- Los literales son la característica que tiene el lenguaje de interpretar qué tipo de dato es
sin tener que especificarlo.

En este ejemplo, la variable año se ha declarado e inicializado a diferencia de las demás
que solo se imprimieron.

let año = 2005;
console.log(año);
console.log(2006);                 
console.log("Caroline")  


 */
    