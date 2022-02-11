function somaValor(arr){
    return arr.reduce(callBack)
}
const callBack = function(acumulador, currentValue){
     return  acumulador + currentValue
}
const num = [ 2,3,4,5]
console.log(somaValor(num))