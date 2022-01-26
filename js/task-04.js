const plusBtn = document.querySelector('[data-action="increment"]')
const minusBtn = document.querySelector('[data-action="decrement"]')
const counterValue = document.getElementById('value')

plusBtn.addEventListener('click', () => {
    counterValue.innerText = ++counterValue.innerText
})

minusBtn.addEventListener('click', () => {
    // если элемент меньше 1, не отнимать(для товаров в корзине)
    // if( parseInt(counterValue.innerText) > 1 ) {
    //     counterValue.innerText = --counterValue.innerText
    // }
    counterValue.innerText = --counterValue.innerText
})

