// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientList = document.querySelector('#ingredients')

// const ingredientsListItems = ingredients.map((ingredient) => {
//   const itemLi = document.createElement('li')
//   itemLi.textContent = ingredient
//   itemLi.classList.add('item')
//   console.log(itemLi)
//   return itemLi
// })

// ulElem.append(...ingredientsListItems)
// console.log(ingredientsListItems);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients')

const ingredientsListItems = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li')
  itemLi.textContent = ingredient
  itemLi.classList.add('item')
  console.log(itemLi)
  return itemLi
})

console.log(ingredientsListItems);
ingredientList.append(...ingredientsListItems)
