
const palindromo = (numero) => {
    
    let normal = (numero.toString()).split("");
    var reves = [];

    for(let i=(normal.length)-1;i>=0;i--){
        reves.push(normal[i]);
    }

    for(let i=0;i<normal.length;i++){
        if(normal[i]!==reves[i]){
            return false;
        }
    }

    return true;
}

//console.log(palindromo(121));
//console.log(palindromo(121534532));
//console.log(palindromo(-121));