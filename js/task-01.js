const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
const numberOfCatrgoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${numberOfCatrgoriesEl}`);
console.log('')

for(let i = 0; i < numberOfCatrgoriesEl; i += 1) {
    const headerTextEl = allCategoriesEl[i].firstElementChild.textContent;
    console.log(`Category: ${headerTextEl}`)

    const elementsEl = allCategoriesEl[i].lastElementChild
    const numberOfElementsEl = elementsEl.querySelectorAll('li')
    console.log(`Elements: ${numberOfElementsEl.length}`)
    console.log('')
}