const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const valueBtn = document.getElementById('value')

incrementBtn.addEventListener('click', () => {
    valueBtn = incrementBtn + 1
    return valueBtn
})
incrementBtn()