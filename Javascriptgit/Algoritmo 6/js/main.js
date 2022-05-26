//6 Elabora un algoritmo para leer un número y determinar si es par o impar
let a=prompt("Ingresa un numero:", "" );

a=parseInt(a,10);

if (a%2==0){
    alert("El numero "+a+" es par")
} else {
    alert("El numero "+a+" es impar")
}