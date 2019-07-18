function mostrar()
{
//tomo la edad  

	var edad;
    var estadocivil; // la variable no puede ser compuesta, es decir, estado civil, tiene que ir todo junto

    edad = parseInt (document.getElementById ("edad").value);
    estadocivil = document.getElementById ("estadoCivil").value;

    if (edad <18 && estadocivil != "Soltero")
{
    alert ("Es muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN
