function mostrar()
{
	var letra;
	var numero;
	var seguir;
	var contnumpar;
	contnumpar = 0;
	var contnumimp;
	contnumimp = 0;
	var contcero;
	contcero = 0;

	do
	{
		letra = prompt ("Ingrese una letra: ");
		while (!isNaN (letra))
		{
			letra = prompt("Error. Reingrese una letra");
		}

		numero = prompt ("Ingrese un numero entre -100 y 100: ");
		while (isNaN (numero) || numero < -100 || numero > 100)
		{
			numero = prompt ("Error. Reingrese un numero entre -100 y 100: ");
		}

		/* se validaron los datos*/

		if (numero % 2 == 1)
		{
			contnumimp++;
		}
		else
		{
			contnumpar++;
		}

		if (numero == 0)
		{
			contcero++;
		}

		seguir = prompt ("Desea continuar?");

	} while (seguir == "s" || seguir == "S")


	document.write ("a) La cantidad de números pares: " + contnumpar + "<br>")
	document.write ("b) La cantidad de números impares: " + contnumimp + "<br>")
	document.write ("c) La cantidad de ceros: " + contcero + "<br>")



}

