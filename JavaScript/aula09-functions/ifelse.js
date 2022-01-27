function numeroPositivo(num){
    let resultado

    if(num<0){
        resultado = false
    }
    else{
        resultado = true
    }
    return resultado
}
console.log(numeroPositivo(2))
console.log(numeroPositivo(-1))

//POSSO TAMBEM COLOCAR A CONDICIONAL EM UMA VARIAVEL.

function numeroPositivo2(num){
    let ehNegativo = num <0
    let resultado

    if(ehNegativo){
        resultado = false;
    }
    else{
        resultado=true
    }
    return resultado
}

console.log(numeroPositivo2(-1))

//PODE SIMPLIFICAR AINDA MAIS
function numeroPositivo3(num){
    const ehNegativo = num <0

    if(ehNegativo){
      return false   
    }
    return true
}
console.log(numeroPositivo3(2))

//ANINHAMENTO DE IF VER SE É POSITIVO E MAIOR QUE 10
function numeroPositivo4(num){
    const ehNegativo = num < 0
    const ehMaiorQue10 = num>10

    if(ehNegativo){
        return "Número é negativo"
    }else if (!ehNegativo && ehMaiorQue10){
        return `${num} é positivo e maior que 10`
    }
    return "Esse número é positivo e menor que 10"
}
console.log(numeroPositivo4(1))
console.log(numeroPositivo4(14))
console.log(numeroPositivo4(-1))

//SWITCH CASE.
function getAnimal(id){
    switch(id){
        case 1:
            return 'cao'
            break
        case 2:
            return 'gato'
            break
        case 3:
            return 'passaro'
            break
        default:
            return 'peixe'
    }
}
console.log(getAnimal(2))
console.log(getAnimal(4))
console.log(getAnimal('1')) //Vai retornar peixe, porque ele compara o tipo tambem. 