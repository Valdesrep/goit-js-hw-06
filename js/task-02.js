const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  return ingredient.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const ingredient = makeItem(ingredients);
ingredientsEl.append(...ingredient);
