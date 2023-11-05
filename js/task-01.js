const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const itemList = item.querySelectorAll("li");

  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemList.length}`);
});

