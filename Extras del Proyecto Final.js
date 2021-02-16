
//OBTENIENDO LA EDAD 

var precio=2000; //Este es el precio base con el que trabajaremos
window.alert("Bienvenido a Seguros TK-U"); //Este es el mensaje de bienvenida
var respuesta="si"

while(respuesta !="salida"){
var nombre=prompt("¿Cuál es su nombre?");
var edad_asegurado=prompt("¿Cuál es su edad?"); //Esta es la edad del asegurado:

//EVALUACION SI APLICA AL SEGURO

if (edad_asegurado>=18 && edad_asegurado<=24){
  var precio_1= (10/100)*precio;
}
if (edad_asegurado>=25 && edad_asegurado<=49){
  var precio_1= (20/100)*precio;
}
if (edad_asegurado>=50){
  var precio_1= (30/100)*precio;
}
if (edad_asegurado<=17){
  window.alert("Estimado consumidor, debido a su edad no puede optar a uno de nuestros seguros");
  throw new Error("error");
}

//EVALUACIÓN SI EL CÓNYUGUE APLICA 

string="si"; //preparamos las respuesta
string="no";//preparamos las respuesta

var conyugue=prompt("¿Tiene cónyugue? - Ingrese 'si' o 'no'")
if (conyugue=="si"){
  var edad_conyugue=prompt("¿Cuál es la edad de su cónyugue?");
  if (edad_conyugue>=18 && edad_conyugue<=24){
  var precio_2= (10/100)*precio;
}else if (edad_conyugue>=25 && edad_conyugue<=49){
  var precio_2= (20/100)*precio;
}else if (edad_conyugue>=50){
  var precio_2= (30/100)*precio;
}else if (edad_conyugue<=17){
  window.alert("Estimado cliente, debido a la edad la persona no puede optar a uno de nuestros seguros");
  var precio_2=0
}
}
if (conyugue=="no"){
  window.alert("Gracias por su respuesta");
  var precio_2=0
}

//EVALUACIÓN SI TIENE HIJOS

string="si";
string="no";
var hijos=prompt("¿Tiene hijos? - Ingrese 'si' o 'no'")
if (hijos=="si"){
  var hijos_num=prompt("¿Cuántos hijos tiene?")
  var precio_3=(20/100)*precio;
  var precio_4= hijos_num*precio_3
}else {
  window.alert("Gracias por su respuesta");
  var precio_4=0
}

//EVALUACIÓN POR PROPIEDADES

string="si";
string="no";
var propiedades=prompt("¿Tiene propiedades? - Ingrese 'si' o 'no'")
if (propiedades=="si"){
  var propiedades_num=prompt("¿Cuántas propiedades tiene?")
  var precio_5=(35/100)*precio;
  var precio_6= propiedades_num*precio_5
}else {
  window.alert("Gracias por su respuesta");
  var precio_6=0
}

//EVALUACIÓN POR SALARIO
var salario=prompt("¿De cuánto es el salario que gana?")
var precio_7=(05/100)*salario

//PRECIO FINAL

var precio_final=precio+=precio_1+=precio_2+=precio_4+=precio_6+=precio_7
window.alert("Estimable " + nombre + "," + " El total a pagar en quetzales es " + precio_final);
  
respuesta=prompt("Desea alguna cotización más escriba 'si', escriba'salida' para terminar su cotizacion")
}

alert("Gracias por utilizar nuestros servicios");


























