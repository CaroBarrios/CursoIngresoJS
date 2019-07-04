/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var descuento;
    var resultado;

    importe = parseInt (document.getElementById ("importe").value); // tomo el dato de la caja de texto

    descuento = importe * 25 / 100; // saco el 25% para descontarselo despuès al importe 

    resultado = importe - descuento; // descuento al importe el 25%

    document.getElementById ("resultado").value = resultado; // muestro el resultado en la caja de texto

}
