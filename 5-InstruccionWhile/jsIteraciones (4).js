function mostrar()
{

	var numero = parseInt (prompt("Ingrese un número entre 0 y 10"));

	while (numero < 0 || numero > 10 || isNaN (numero))
	{
		alert ("El nùmero es incorrecto");
		numero = parseInt (prompt ("Ingrese un número entre 0 y 10"));
	}

	document.getElementById ("Numero").value = numero;


}//FIN DE LA FUNCIÓN