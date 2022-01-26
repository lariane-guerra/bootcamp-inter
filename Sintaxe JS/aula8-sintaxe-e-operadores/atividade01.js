//Solução 01: 
function verificaPalindromo(string){
    if(!string) return "String inexistente"; /*Verificar se a string existe (verifica se é diferente de true)*/

    return string.split("").reverse().join("") === string
    //split = quebra a string
    //reverse = pode ser usado pq dps de quebrar, vira um array, ai inverte todos os item do array
    //join = junta tudo novamente.

}
console.log(verificaPalindromo("ama"))

//Solução 02
// omo = comparar 2 letras ao mesmo tempo. se o caracter que esta no indice 0 é igual o ultimo. vamos estar verificando 2 caracteres
//abba
//0123 
function verificaPalindromo2(string){
    if(!string) return "String inexistente";

    for(let i =0; i<(string.length/2); i++){
       if(string[i] !== string[string.length -1 - i]){
           return false
       } //confuso. visto no teste de mesa
    }
    return true;
}

console.log(verificaPalindromo2("abba"))