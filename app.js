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
//    console.log(document.querySelector('.notification').getAttribute('class'))
   document.querySelector('.notification').setAttribute('class', 'notification')
    document.querySelector('.notification').setAttribute('key', '1')
    document.querySelector('.notification').setAttribute('user-id', '1')
    // console.log(Number(document.querySelector('.notification').getAttribute('user-id')))
    let elements = document.querySelectorAll('.one')
    elements.forEach((el) => {
        console.log(el.innerText)
    })
    // for (let i = 0; i < elements.length; i++) {
    //     console.log(elements[i].innerText)
    // }
    // console.log(document.querySelectorAll('.one').innerText)
    console.log(document.querySelector('#two').innerText)
    console.log(document.querySelector(" [user-id='4']").innerText)

}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}

