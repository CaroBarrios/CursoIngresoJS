/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var resto;

    num1 = parseInt (document.getElementById ("numeroDividendo").value); // tomos el id del numero dividendo y los tranformo en entero
    num2 = parseInt (document.getElementById ("numeroDivisor").value);

    resto = num1 % num2; // con el mòdulo (%) saco el resto

    alert ("el resto es " + resto); // con alert muestro el resto

}
