function mostrar()
{
var numero1;
var numero2;
var resta;
var suma;

numero1 = parseInt (prompt ("Ingrese el primer numero"));
numero2 = parseInt (prompt ("Ingrese el segundo numero"));

if (numero1 == numero2)
{
    alert ("" + numero1 + "" + numero2); 
}
else if (numero1 < numero2)
{
    suma = numero1 + numero2;
    alert (suma);
    if (suma > 10)
    {
        alert ("La suma es " + suma + " y superó el 10");
    }
}
else
{
    resta = numero1 - numero2;
    alert (resta);
}
}

