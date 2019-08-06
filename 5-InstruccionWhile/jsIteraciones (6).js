function mostrar()
{
	// declaro las variables y las que van a iterar y acumular las inicializo
	var i = 0; // si le pongo "i=1" y mantengo la condición i < 5 me va a pedir el número 4 veces
	var suma = 0; // suma es lo mismo que decir acumulador y hay que inicializarla para sumar los números que se ingresen
	var nùmero;

	while ( i < 5 ) // si pongo i=5 entro en un bucle 
	{
		número = parseInt (prompt ("Ingrese un nùmero")); // inicializo la variable 2)
		suma = suma + número; // si se pone suma fuera del while no suma pero se puede poner antes o después de "i++;"
		// suma comienza en 0, cuando se pregunte por 1ra vez va a sumar 0 + número, luego va a sumar la 
		//operación anterior + el número que se ingresó por 2da vez y así con todos los números 
		i ++;
	}	

    document.getElementById('suma').value=suma;
    document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN