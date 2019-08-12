function mostrar()
{
	var localidad;
	var habitantes;
	var tempmin;
	var seguir;
	var conttemppar;
	conttemppar = 0;
	var menorhabitantes;
	var localidadmenor;
	var flag;
	flag = 0;
	var conttemp40;
	conttemp40 = 0;
	var conthab;
	conthab = 0;
	var suma;
	suma = 0;
	var promedio;
	var menortemp;
	var locmenortemp;
	var flag1;
	flag1 = 0;


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

		/* se ingresó y validó los datos*/

		tempmin = parseInt (tempmin)
		if (tempmin % 2 == 0)
		{
			conttemppar++;
		}

		habitantes = parseInt (habitantes)
		if (habitantes < menorhabitantes || flag == 0)
		{
			menorhabitantes = habitantes;
			localidadmenor = localidad;
			flag = 1;
		}

		if (tempmin > 40)
		{
			conttemp40++;
		}

		if (habitantes > 1)
		{
			conthab++;
			suma = suma + habitantes;
		}

		if (tempmin < menortemp || flag1 == 0)
		{
			menortemp = tempmin;
			locmenortemp = localidad;
			flag1 = 1;
		}

		seguir = prompt ("Desea continuar?")

	} while (seguir == "s" || seguir == "S")

	promedio = suma / conthab;

	document.write ("a) La cantidad de temperaturas pares: " + conttemppar + "<br>")
	document.write ("b) El nombre de la localidad con menos habitantes: " + localidadmenor + "<br>")
	document.write ("c) La cantidad localidades que superan los 40 grados de temperatura: " + conttemp40 + "<br>")
	document.write ("d) El promedio de habitantes entre las localidades ingresadas: " + promedio + "<br>")
	document.write ("f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura: " + menortemp + " " + locmenortemp + "<br>")

}
