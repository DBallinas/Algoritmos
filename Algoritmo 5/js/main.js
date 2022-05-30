//5 Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let a=prompt("Ingresa un numero:", "" );
let b=prompt("Ingresa un segundo numero:", "" );
let c=prompt("Ingresa un tercer numero:", "" );

a=parseInt(a,10);
b=parseInt(b,10);
c=parseInt(c,10);

if (a==(b+c)) {
    alert("El numero "+a+" es la suma de "+b+" y "+c)
}else if(b==(a+c)){
    alert("El numero "+b+" es la suma de "+a+" y "+c)
} else if(c==(a+b)){
    alert("El numero "+c+" es la suma de "+a+" y "+b)
}else {
    alert("Ningun numero es producto de la suma de los otros 2")
}