function multiplicaPorDois(array){
    let multiplicado = [] // array auxiliar vazio

    for(let i=0; i< array.length; i++){
        multiplicado.push(array[i]*2)
    }
    return multiplicado
}
const numbers = [2,4,6,8,10]

console.log(multiplicaPorDois(numbers))

//FOR IN PARA OBJS

function forInObjs(obj){
    for( prop in obj){
        console.log(prop)
    }
}

const meuObj = {
    name: 'Lari',
    age: 20,
    city: 'Colatina'
}

forInObjs(meuObj)

//PARA IMPRIMIR O QUE ESTA DENTRO DA KEY
function forInObjs2(obj){
    for( prop in obj){
        console.log(obj[prop])
    }
}

const meuObj2 = {
    name: 'Lari',
    age: 20,
    city: 'Colatina'
}

forInObjs2(meuObj2)