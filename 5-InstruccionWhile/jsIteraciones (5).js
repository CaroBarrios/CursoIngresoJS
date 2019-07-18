function mostrar()
{

var sexo = prompt("Ingrese f ó m");

while ( sexo != "m" && sexo != "f" )
{
    alert ("Incorrecto");
    sexo = prompt ("Reingrese el sexo");
}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN