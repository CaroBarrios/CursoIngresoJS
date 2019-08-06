function mostrar()
{
var planeta;

planeta = prompt ("Ingrese el nombre de un planeta del sistema solar");

switch (planeta)
{
    case "tierra":
        {
            alert ("acá vivimos");
            break;
        }
    case "venus":
        {
            alert ("acá hace más calor");
            break;
        }
    case "mercurio":
        {
            alert ("acá hace más calor");
            break;
        }
    case "marte":
        {
            alert ("acá hace más frio");
            break;
        }
    case "jupiter":
        {
            alert ("acá hace más frio");
            break;
        }
    case "saturno":
        {
            alert ("acá hace más frio");
            break;
        }
    case "urano":
        {
            alert ("acá hace más frio");
            break;
        }
    case "neptuno":
        {
            alert ("acá hace más frio");
            break;
        }
    case "pluton":
        {
            alert ("acá hace más frio");
            break;
        }
    default:
        {
            alert ("No es un planeta válido");
            break;
        }
}
}
