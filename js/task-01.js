const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

Array.from(categoryItems).forEach(categoryItem => {
  
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const numElementsInCategory = categoryItem.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numElementsInCategory}`);
});
