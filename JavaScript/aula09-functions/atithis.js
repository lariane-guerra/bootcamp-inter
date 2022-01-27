function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
//CRIAR OBJS COM NOME, IDADE.

const pessoa1 = 
    {
        nome: 'Lari',
        idade: 26
    }

console.log(calculaIdade.call(pessoa1,5)) //só whaseparado por virgula

console.log(calculaIdade.apply(pessoa1,[30])) //APPLY em colchete