//4 Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let a=prompt("Ingresa un numero (100-200):", "" );

a=parseInt(a,10);

if (a>200||a<100){
    alert("El numero "+a+" es invalido")
} else if(a%3==0){
    alert("El numero es "+a+" si es multiplo de 3")
}else {
    alert("El numero "+a+" no es multiplo de 3")
}