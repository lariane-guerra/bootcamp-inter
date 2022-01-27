const user = {
    id: 42,
    nickName: 'lariguerra',
    fullName:{
        fistName: 'Lariane',
        lastName: 'Guerra'
    }
}
function userId({id}){
    return id
}
console.log(userId(user))

function getFullName({fullName:{fistName: fist, lastName: last}}){
    return `${fist} ${last}`
}

console.log(getFullName(user))