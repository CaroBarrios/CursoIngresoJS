/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1; // declaro las variables
    var num2;
    var suma;

    num1 = parseInt (document.getElementById ("numeroUno").value); // tomamos los nùmeros por id desde la caja de texto y los convierto de string a number
    num2 = parseInt (document.getElementById ("numeroDos").value);

    suma = num1 + num2; // realizo la operación

    alert ("la suma es " + suma); // muestro el resultado por alert
}

function restar()
{
	var num1;
    var num2;
    var resta;

    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);

    resta = num1 - num2;

    alert ("la resta es " + resta);
}

function multiplicar()
{ 

var num1;
var num2;
var multiplicar;

num1 = parseInt (document.getElementById ("numeroUno").value);
num2 = parseInt (document.getElementById ("numeroDos").value);

multiplicar = num1 * num2;

alert ("la multiplicaciòn es " + multiplicar);

}

function dividir()
{
	var num1;
    var num2;
    var dividir;

    num1 = parseInt (document.getElementById ("numeroUno").value);
    num2 = parseInt (document.getElementById ("numeroDos").value);

    dividir = num1 / num2;

    alert ("la divisiòn es " + dividir);
}

