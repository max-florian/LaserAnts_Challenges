
const telefono = [
    {
        "numero": '2',
        "caracteres": ['a','b','c']
    },
    {
        "numero": '3',
        "caracteres": ['d','e','f']
    },
    {
        "numero": '4',
        "caracteres": ['g','h','i']
    },
    {
        "numero": '5',
        "caracteres": ['j','k','l']
    },
    {
        "numero": '6',
        "caracteres": ['m','n','o']
    },
    {
        "numero": '7',
        "caracteres": ['p','q','r','s']
    },
    {
        "numero": '8',
        "caracteres": ['t','u','v']
    },
    {
        "numero": '9',
        "caracteres": ['w','x','y','z']
    },
    {
        "numero": '',
        "caracteres": []
    }
];

const caracteres_aceptados= ['2','3','4','5','6','7','8','9'];

function VerificarRestricciones(entrada){
    let nums_separados = entrada.split("");

    if (!(nums_separados.length>=0 && nums_separados.length<=4)){
        return false;
    }else{
        for (let i=0;i<nums_separados.length;i++){
            if (!(nums_separados[i] in caracteres_aceptados)){
                return false;
            }
        }
    }

    return true;
    
};

function producto_cartesiano(args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a+=args[i][j];
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

function CombinacionesLetrasNumeros(entrada){

    if(VerificarRestricciones(entrada)){
        let numeros = entrada.split("");
        let caracteres = [];
        for(let i=0;i<numeros.length;i++){
            for(let j=0;j<telefono.length;j++){
                if(numeros[i]===telefono[j].numero){
                    caracteres.push(telefono[j].caracteres);
                }
            }
        }
        return producto_cartesiano(caracteres);
    }else{
        return "La cadena que ingresó es invalida!";
    }
}

console.log(CombinacionesLetrasNumeros("234"));
