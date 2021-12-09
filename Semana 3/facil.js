const caracteres_validos = ['(',')','{','}','[',']'];

var arreglo = [];

function parentesis_valido(s){
    arreglo = s.split("");
    return analisis(0);
}

function analisis(indice){

    if(indice<arreglo.length){
        console.log("Caracter actual: "+arreglo[indice]+" Indice: "+indice);
        switch (arreglo[indice]){
            case '(':
                if(arreglo[indice+1]){
                    if(arreglo[indice+1]===')'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='('){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='{'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='['){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            case '{':
                if(arreglo[indice+1]){
                    if(arreglo[indice+1]==='}'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='{'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='('){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='['){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            case '[':
                if(arreglo[indice+1]){
                    if(arreglo[indice+1]===']'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='['){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='('){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice+1]==='{'){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            case ')':
                if(arreglo[indice-1]){
                    if(arreglo[indice-1]==='('){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===')'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===']'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]==='{'){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            case '}':
                if(arreglo[indice-1]){
                    if(arreglo[indice-1]==='{'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]==='}'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===']'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===')'){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            case ']':
                if(arreglo[indice-1]){
                    if(arreglo[indice-1]==='['){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===']'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]==='}'){
                        indice ++;
                        analisis(indice);
                    }else if(arreglo[indice-1]===')'){
                        indice ++;
                        analisis(indice);
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                break;
            default:
                return false;
        }
        return 'efe';
    }else{
        console.log("Llegó al final");
        return true;
    }
}

parentesis_valido("{()}");
//console.log(parentesis_valido(""));
//console.log(parentesis_valido(""));
//console.log(parentesis_valido(""));