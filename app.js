'use strict'
const panelText = document.querySelector('.panel').innerText
console.log(panelText)
document.querySelector('.panel').innerText = 'New Text'
document.querySelector('.input').value = 'text'

document.querySelector('.button').addEventListener('click', function(){
    console.log('click')
})  