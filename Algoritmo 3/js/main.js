// adivinar un numero
function Adivinar() {
    let superior =100;
    let inferior=1;

    let noEncontrado = true;
    while (noEncontrado) {
        let mid = parseInt(inferior+((superior-inferior) /2));
        console.log(mid);
        console.log(((superior-inferior)/2));
        if (((superior-inferior)/2)<1) {
            noEncontrado=false;
            alert("Tu numero es el " + (parseInt(mid)+1));
            break;
        } //if 
        let res = confirm("Tu numero es menor o igual a "+mid);
        if (res){
superior=mid;
        } else {
            inferior=mid;
        }//if
        console.log(inferior, superior);
    }//while
}//Adivinar
Adivinar();