//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

function verificarArray(arr){
    const mySet = new Set(arr)

    return [...mySet] //usando a tecnica rest.

}
console.log(verificarArray(array))