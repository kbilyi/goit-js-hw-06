
const refs = {
    formInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
}

refs.formInput.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = 'Anonymous'
    } else {
        // console.log(event.currentTarget.value);
        refs.nameOutput.textContent = event.currentTarget.value
    }
}
