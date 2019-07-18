function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById("edad").value);

if (edad >=18)
{
    alert ("Es mayor de edad");
}

else if ((edad >=13) && (edad <=17)) // o se puede escribir: else if (edad >=13) porque ya descartè en el if anterior que no sea adulto, es decir, edad >=18
{
    alert ("Es adolescente");
}

else
{
    alert ("Es menor de edad");
}

}//FIN DE LA FUNCIÓN