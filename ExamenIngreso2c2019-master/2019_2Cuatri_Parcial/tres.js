function mostrar()
{
	var localidad;
	var habitantes;
	var tempmin;
	var seguir;

	do
	{
		localidad = prompt ("Ingrese su localidad: ");
		while (!isNaN (localidad))
		{
			localidad = prompt ("Error. Reingrese su localidad: ");
		}

		habitantes = prompt ("Ingrese el numero de habitantes: ");
		while (isNaN (habitantes) || habitantes < 1 || habitantes > 40)
		{
			habitantes = prompt ("Error. Reingrese el numero de habitantes: ");
		}

		tempmin = prompt ("Ingrese la temperatura minima: ");
		while (isNaN (tempmin) || tempmin < -50 || tempmin > 50)
		{
			tempmin = prompt ("Error. Reingrese la temperatura minima: ");
		}

		seguir = prompt ("Desea continuar?")

	} while (seguir == "s" || seguir == "S")

	document.write ("a) La cantidad de temperaturas pares: " + "<br>")

}
