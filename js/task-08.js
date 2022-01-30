const form = document.querySelector("login-form > submit")

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    console.log(asdsad);
}

function onFormSubmit(event) {
    if (event.currentTarget.value === "") {
        alert("Все поля должны быть заполнены")
    } else {
        // console.log(event.currentTarget.value);
        refs.nameOutput.textContent = event.currentTarget.value
    }
}

