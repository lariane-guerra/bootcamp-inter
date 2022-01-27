/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/

function alunoAprovados(arr,media){
    let avgMaior = []
        
        for(let i=0; i < arr.length; i++){

            const {nota,nome} = arr[i] //Obj destructing, apenas as propriedades que a gente quer.
            
            if(nota >= media){
                avgMaior.push(nome)
            }
            /*
                if(arr[i].nota >= media){
                avgMaior.push(arr[i].nome)
            } */
        }
        return avgMaior  
}


let alunos = [
    {
		nome: 'João',
		nota: 4,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
]
console.log(alunoAprovados(alunos,5))