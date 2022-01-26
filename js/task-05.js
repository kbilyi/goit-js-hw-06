const formInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

console.log(nameOutput);
console.log(formInput);

const output = function() {
    formInput.innerText = nameOutput.innerText.innerHTML
}

output()