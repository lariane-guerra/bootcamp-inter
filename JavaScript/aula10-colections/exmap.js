/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores. */

const usuarios = new Map()
usuarios.set('Fernando','Admin')
usuarios.set('Luiz','Admin')
usuarios.set('Talita','Usuario')
usuarios.set('Patricia','Usuario')


function getAdmins(map){
    let admin = []
    for([key, value] of map)
    if(value == 'Admin'){
        admin.push(key)
    }
    return admin
}
console.log(getAdmins(usuarios))