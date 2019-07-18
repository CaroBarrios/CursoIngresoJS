function mostrar()
{
//tomo la edad  

    var nota = Math.floor (Math.random ()* 10 + 1);

    if (nota >=9)
    {
          alert ("Su nota es: " + nota + "Excelente")
    }

    else if (nota > 3)
    {
        alert ("Su nota es:" + nota + "Aprobò")
    }
    
    else
    {
        alert ("Su nota es: " + nota + "Vamos, la pròxima se puede")
       
    }

}//FIN DE LA FUNCIÓN