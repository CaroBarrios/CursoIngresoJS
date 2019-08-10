function mostrar()
{
  var tipo;
  var edad;
  var peso;
  var nombre;
  var contador;
  contador = 0; // no inicializar cuando se declara, es mala practica
  var sumapeso;
  sumapeso = 0;
  var promedio;
  var mayoredad;
  mayoredad = 0;
  var nombremasviejo;
  var flag;
  flag = 0;
  var acumulador2;
  acumulador2 = 0;

  while (contador < 4)
  {
    peso = prompt ("Ingrese el peso de la mascota: ");
    while (isNaN (peso) || peso < 1 || peso > 100)
    {
      peso = prompt ("Error. Reingrese el peso de la mascota entre 1 y 25: ");
    }
    
    tipo = prompt ("Ingrese el tipo de mascota, si es perro o gato: ");
    while (tipo != "perro" && tipo != "gato")
    {
      tipo = prompt ("Error. Reingrese el tipo de animal, debe ser perro o gato: ");
    }
    
    edad = prompt ("Ingrese la edad de su mascota entre 1 y 25: ");
    while (isNaN (edad) || edad < 1 || edad > 25)
    {
      edad = prompt ("Error. Reingrese la edad de la mascota entre 1 y 25: ");
    }

    nombre = prompt ("Ingrese el nombre de su mascota: ");
    
    contador++;

    /*validè los datos y agreguè el contador*/
    
    /*a) paso peso a num entero y lo sumo para sacar el promedio*/
    peso = parseInt (peso);
    sumapeso = sumapeso + peso;
    /*b) saco el nombre del perro màs viejo*/
    
    edad = parseInt (edad); // se parsea la edad antes de comparar porque sino va a comparar un string con otro string?
    if (tipo == "perro" && flag == 0) // profe pone (tipo == 0 && flag == 0) y antes parsea edad --> edad = parseInt (edad)
    {
      mayoredad = edad;
      nombremasviejo = nombre;
      flag = 1; 
    } // queda como firulais si se ingresan los datos como indica en la pagina
    // este està mal porque toma nombre firulais con los ejemplos del ejercicio //
    /*
    if (tipo == "perro" && edad > mayoredad)
    {
      mayoredad = edad;
      nombremasviejo = nombre;
    }*/  
    // c) saco la cantidad de animales menore a 10k de mas de 10 años*/
    if (edad > 10 && peso < 10)
    {
      acumulador2++;
    }
  }  
  /*saco promedio fuer del while porque sino entra en un bucle*/
  promedio = sumapeso / contador;

  document.write("a) El promedio de los pesos totales: " + promedio + "<br>") /* me queda como NaN*/
  document.write("b) El nombre del perro màs viejo es: " + nombremasviejo + "<br>")
  document.write("c) La cantidad animales menores a 10 kilos de mas de 10 años " + acumulador2 + "<br>")
  
}


