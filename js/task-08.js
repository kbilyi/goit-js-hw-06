const formSub = document.querySelector("login-form > submit")
const formPass = document.querySelector("login-form > password")
const formEmail = document.querySelector('login-form > email')

formSub.addEventListener('submit', onFormSubmit) 
    

function onFormSubmit(event) {
    event.preventDefault()

    if(formPass === '') {
        alert('Все поля должны быть заполнены!')
    } else if(formEmail === '') {
        alert('Все поля должны быть заполнены!')
    }
}






// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) {
//     event.preventDefault();

//     console.log(asdsad);
// }

// function onFormSubmit(event) {
//     if (event.currentTarget.value === "") {
//         alert("Все поля должны быть заполнены")
//     } else {
//         // console.log(event.currentTarget.value);
//         refs.nameOutput.textContent = event.currentTarget.value
//     }
// }

