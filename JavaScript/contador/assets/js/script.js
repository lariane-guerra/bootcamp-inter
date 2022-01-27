console.log('Força Lari')

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var count =0;

    var obj = document.getElementById('add')
    obj.addEventListener("click", increment)

    obj = document.getElementById('sub')
    obj.addEventListener("click", decrement)

function increment(){
    if(currentNumber < 10){
    currentNumber ++
    currentNumberWrapper.innerHTML = currentNumber
    }else{
        console.log('entrou aqui')
    }
}

function decrement(){
    if(currentNumber < 0 ){
        currentNumberWrapper.style.color = 'red'
    }
    else{
        currentNumber --
        currentNumberWrapper.innerHTML = currentNumber
        count++
    }
}



