//EXEMPLO THIS.
console.log(this) // Elemento vazio. 

const pessoa = {
    firstName: 'Lariane',
    lastName: 'Guerra',
    getFullName: function () {
        console.log(`O nome completo é ${this.firstName} ${this.lastName}`)
    }
}
pessoa.getFullName()

//Aprendendo a manipular o this
const myObj = {
    num1: 5,
    num2: 10
}

function soma(a,b){
     //ou seja, esta esperando um parametro a e b
     console.log(this.num1 + this.num2 + a+ b)
     //aqui estou acessando o objeto (myObj) e recolhendo os valores da chave num1 e num2.
}

soma.call(myObj, 1  ,3)

soma.apply(myObj, [1  ,3])
//apontando para qual objeto quero conseguir os dados e passando mais 2 parametros para a funcao soma.

const person = {
    name: 'Lari'
}
const animal ={
    name: 'Flocos'
}

function getName(){
    console.log(this.name)
}
getName.call(animal)
getName.call(person)