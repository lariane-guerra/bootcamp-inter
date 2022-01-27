function calculadora(){
    const operacao = prompt('Escolha uma operação: \n 1-Soma(+)\n 2-Subtração (-)\n 3-Multiplicação (*)\n 4-Divisão real (/)\n 5-Divisão Inteira (%)\n 6-Potenciação (**)')
    
    let n1 = Number(prompt('Insira o primeiro valor:'))
    let n2 = Number(prompt('Insira o segundo valor'))
    let resultado
function soma(){
    resultado = n1+n2
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao()
}
function subtracao(){
    resultado = n1-n2
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao()
}
function multip(){
    resultado = n1*n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao()
}
function divreal(){
    resultado = (n1 / n2)
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao()
}
function divinteira(){
    resultado = (n1 % n2)
    alert(`${n1} % ${n2} = ${resultado}`)
    novaOperacao()
}
function potencia(){
    resultado = (n1 ** n2)
    alert(`${n1} ** ${n2} = ${resultado}`)
    novaOperacao()
}

function novaOperacao(){
    var opcao = prompt('Deseja fazer uma nova operação? \n 1-Sim \n 2-Não')
    if(opcao = 1){
        calculadora()
    }else if(opcao = 2){
        alert('Obrigada, ate amis')
    }
    else{
        alert('Inválido')
    }
}

if(operacao == 1){
    soma()
}else if(operacao==2){
    subtracao()
}else if(operacao==3){
    multipl()
}else if(operacao==4){
    divreal()
}else if(operacao==5){
    divinteira()
}else if(operacao==6){
    potencia()
}
}

calculadora()