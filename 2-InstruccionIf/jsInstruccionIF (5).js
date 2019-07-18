function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById ("edad").value);

if ((edad <13) || (edad>17)) // o se puede escribir negando de la sig. forma: if (!(edad >=13 && edad <=17))

{
   alert ("NO es adolescente");
}

}//FIN DE LA FUNCIÓN