//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado
/**/
function verificarArr(arr,num){
    try {
           if(!arr && !num) throw new ReferenceError('Está faltando os parametros')
    if(typeof arr !== 'object') throw new TypeError('O array precisa ser de objeto')
    if(typeof num !== 'number') throw new TypeError('O número nao é do tipo desejado')
    if(arr.length !== num) throw new RangeError('São de tamanho diferentes') 

    return arr
    } catch (e) {
        if(e instanceof ReferenceError){
            //se o erro for uma instancia do reference erro.
            console.log('Esse erro é um reference error')
            console.log(e.message)
        }
        else if(e instanceof TypeError){
            console.log(e.message)
            console.log('Esse erro é um type error')
        }
        else if( e instanceof RangeError){
            console.log(e.message)
            console.log('Esse erro é um range error')
        }
        else{
            console.log('Tipo de erro nao esperado:' +e)
        }
    }
    
}
console.log(verificarArr(5,5))