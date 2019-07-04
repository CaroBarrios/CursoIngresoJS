/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var num1; // declaro las variables
var num2; 
var suma; 

num1 = parseInt (document.getElementById ("numeroUno").value); // inicializo las variables y las convierto de string a number
num2 = parseInt (document.getElementById ("numeroDos").value); 

suma = num1 + num2; // sumo las variables

alert (suma); // muestro el resultado de la suma de las variables
}

// otra forma de escribir num1 y num2 es primero :
// num1 = document.getElementById ("numeroUno").value; // en este paso se inicializa
// num1 = parseInt (num1); // en este paso se pasa de string a number