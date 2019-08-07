function mostrar()
{
 var marca;
 var peso;
 var temperatura;
 var seguir;
 var contemppar = 0;
 var mayorpeso;
 var marcapesada;
 var flag = 0;
 var cantprodmenor0 = 0;
 var acumpeso = 0;
 var contpeso = 0;
 var promedio;
 var menorpeso;

 do
 {
     marca = prompt ("Ingrese la marca del producto: "); // inicializo la variable marca
     
     peso = parseInt (prompt ("Ingrese el peso del producto entre 1 y 100: ")); // inicializo la variable peso
     while (!(peso >= 1 && peso <= 100))
     {
        peso = parseInt (prompt ("Error. Reingrese el peso, debe ser entre 1 y 100: "));
     }
     
     temperatura = parseInt (prompt ("Ingrese la tempratura de almacenamiento entre -30 y 30: ")); // inicializo la variable temperatura
     while (!(temperatura >= -30 && temperatura <=30))
     {
        temperatura = parseInt (prompt ("Error. Reingrese la temperatura de alamacenamiento, debe ser entre -30 y 30: "));
     }
    // sumo las temperaturas pares 
     if (temperatura % 2 == 0)
     {
         contemppar++;
     }
    // muestro la marca con mayor peso
     if (peso > mayorpeso || flag == 0)
     {
         mayorpeso = peso;
         marcapesada = marca;
         
     }
    // sumo la cantidad de productos que se conservan a menos de 0 grados
    if (temperatura < 0)
    {
        cantprodmenor0++; 
    }
    // peso min porque peso max ya lo tengo cuando hice la marcapesada
    if (peso < menorpeso || flag == 0)
    {
        menorpeso = peso;
        flag = 1;
    }
    // guardo datos para luego calcular peso de todos los productos
        contpeso++;
        acumpeso = acumpeso + peso;
    // le pregunto al usuario si desea continuar ingresando datos
     seguir = (prompt ("Desea continuar?"));
 
 } while (seguir == "s");

 // promedio lo calculamos fuera del do-while
 promedio = acumpeso / contpeso;

 document.write ("a) La cantidad de temperaturas pares: " + contemppar + "<br>")
 document.write ("b) La marca del producto más pesado: " + marcapesada + " y el peso es: " + mayorpeso + "<br>")
 document.write ("c) La cantidad de productos que se conservan a menos de 0 grados: " + cantprodmenor0 + "<br>")
 document.write ("d) El promedio del peso de todos los productos: " + promedio + "<br>")
 document.write ("f) El peso máximo " + mayorpeso + " y el mínimo: " + menorpeso + "<br>")
}
