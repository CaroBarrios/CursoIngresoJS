/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre; // declaro las variables
    var edad;

    nombre = document.getElementById ("elNombre").value; // inicializo las variables, tomando en este caso nombre por id
    edad = document.getElementById ("laEdad").value;

    alert ("Usted se llama " + nombre + " y tiene " + edad + " años"); // a travès de un alert muestro concatenados los ids que tomamos nombre y edad

}

