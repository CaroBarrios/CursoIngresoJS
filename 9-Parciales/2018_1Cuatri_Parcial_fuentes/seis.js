function mostrar()
{
var hora;

hora = document.getElementById ("laHora").value;

switch (hora)
{   
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    {
        if (6 && 11) // ver condicional
        {
            alert ("Es de mañana");
        }
        break;
    }
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    {
        if (12 && 19) // ver condicional
        {
            alert ("Es de tarde");
        }
        else
        {
            alert ("Es de noche");
            if (hora < 24)
            {
                alert ("A dormir");
            }
        }
        break;
    }
    default:
    {
        alert ("No es una hora válida");
        break;
    }
}
}
