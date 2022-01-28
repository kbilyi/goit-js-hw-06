const textEl = document.getElementById('font-size-control')
const rangeText = document.getElementById('text')  

textEl.oninput = () => {
    rangeText.style.fontSize = textEl.value + 'px'
}