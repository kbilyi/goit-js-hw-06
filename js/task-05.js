
const refs = {
    formInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
}

refs.formInput.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (refs.formInput.IsNullOrEmpty) {
        refs.nameOutput.textContent = 'Anonymous'
    }

    console.log(event.currentTarget.value);
    refs.nameOutput.textContent = event.currentTarget.value
}
