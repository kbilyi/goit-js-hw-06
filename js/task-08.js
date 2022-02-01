const formSub = document.querySelector(".login-form");
const formPass = document.querySelector("[name='password']")
const formEmail = document.querySelector("[name='email']")

formSub.addEventListener('submit', onFormSubmit)
    
function onFormSubmit(event) {
    event.preventDefault()
    const { elements: { email, password } } = event.currentTarget

    if (formPass === "") {
        alert('Все поля должны быть заполнены!')
    } 
    else if (formEmail === "") {
        alert('Все поля должны быть заполнены!')
    } 
    else {
        const formElem = event.currentTarget.elements
        const mail = formElem.email.value
        const password = formElem.password.value
        const subscription = formElem.subscription.value
        const formData = event.currentTarget
        console.log(formData);
    }
}