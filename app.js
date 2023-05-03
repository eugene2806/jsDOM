'use strict'

function submitForm() {
    const input = document.querySelector('.input').value
    if (!input) {
        return
    }
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''
    // document.querySelector('.notification').classList.add('notification_active')
    // document.querySelector('.notification').classList.remove('notification_hidden')

}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}

localStorage.setItem('token', '3434fifn')
localStorage.setItem('token2', true)
const token2 = localStorage.getItem('token2')
localStorage.removeItem('token2')
localStorage.clear()
console.log(typeof token2)
// console.log(localStorage.getItem('token2'))
