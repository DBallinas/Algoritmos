//1.- Solicitar 3 numeros (rango1-100) y definir el mayor

let a=prompt("Ingresa el primero numero (1-100):", "" );
let b=prompt("Ingresa el segundo numero (1-100):", "" );
let c=prompt("Ingresa el tercer numero (1-100):", "" );

a=parseInt(a,10);
b=parseInt(b,10);
c=parseInt(c,10);

if ((a>=b)&&(a>=c)) {
    alert(a+" es el numero mayor")
} else if((b>=a)&&(b>=c)){
    alert(b+" es el numero mayor")
} else {
    alert(c+ " es el numero mayor")
}