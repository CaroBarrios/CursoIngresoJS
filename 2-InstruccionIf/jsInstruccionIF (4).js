function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById ("edad").value);

if ((edad >=13) && (edad <=17)) // no es necesario escribir las condiciones entre parentesis porque los operadores racionales tienen prioridad ante los operadores lògicos
{
    alert ("Es adolescente");
}

}//FIN DE LA FUNCIÓN