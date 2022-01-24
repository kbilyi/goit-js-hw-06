const minustBtn = document.querySelector('[data-action="increment"]')
const plusBtn = document.querySelector('[data-action="decrement"]')
const valueElem = document.getElementById('value')
let count = 0


// const plusFunction = elem => {
//     for(const i = 0; i < count; i++) {
//     if(document.onclick = plusBtn) {
//         count += 1
//         console.log(count);
//     }
// }
// }
// plusFunction()



// document.onclick = event => {
//     if(onclick.plusBtn) {
//         console.log(minustBtn);
//         plusFunction(minustBtn)
//     }
//     if(event.target.classList.contains('decrement')) {
//         plusFunction(event.target.dataset.id)
//     }
// }

// const plusFunction = id => {
//     for() {
//         valueElem++
//     }
// }

// const minusFunction = id => {
//     valueElem--
// }

document.onclick = event => {
    plusBtn.target = count++
}
