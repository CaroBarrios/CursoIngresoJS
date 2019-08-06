
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    
    ancho = parseInt (prompt ("Ingrese el ancho del rectangulo"));
    largo = parseInt (prompt ("ingrese el largo del rectangulo"));
    perimetro = 2 * (largo * ancho);
    
    alert ("El Perimetro es: " + perimetro);
}
