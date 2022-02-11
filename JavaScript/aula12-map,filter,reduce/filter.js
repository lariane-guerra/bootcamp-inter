function filtraPares(arr){
    return arr.filter((item=> item % 2 === 0))
}

const meuArray = [ 1, 23,55,30,2,4,10]

console.log(filtraPares(meuArray))