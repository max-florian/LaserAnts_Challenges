
function VerificarRestricciones(arreglo){
    if (arreglo.length >= 1 && arreglo.length <= 100){
        if (arreglo[0] > 0){
            for(let i=0;i<arreglo.length;i++){
                if(arreglo[i] < 0 || arreglo[i] > 9){
                    return false;
                }
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
    return true;
}

function SumarUno(arreglo){
    if (VerificarRestricciones(arreglo)){
        let numero = parseInt(arreglo.join(""));
        numero = numero + 1;
        var nuevo_arreglo = numero.toString().split("").map((num)=>{
            return Number(num)
        })
        return nuevo_arreglo;
    }else{
        return "Arreglo Ingresado Invalido!";
    }
}

console.log(SumarUno([1,10,9]));