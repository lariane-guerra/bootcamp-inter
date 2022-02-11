const h1 = document.getElementById('page-title')
const button = document.querySelector('#mode-selector')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

function changeClasses(){
    h1.classList.toggle('dark-mode')
    button.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
}

function changeText(){
    if(body.classList.contains('dark-mode')){
        button.innerHTML = "Light Mode"
        h1.innerHTML = 'Dark Mode ON'
        return
    }
    button.innerHTML = "Dark Mode"
    h1.innerHTML = 'Light Mode ON' 

}

function changeMode(){
    changeClasses()
    changeText()
}
button.addEventListener('click', changeMode)