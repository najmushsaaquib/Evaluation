catchData();
// ! this function catched the Data from the API
async function catchData() {
  let res = await fetch(`https://masai-food-api.herokuapp.com/api/meals/india`);

  let mealsData = await res.json();
  let arrOfMeal = mealsData[0].meals;
  displayMeal(arrOfMeal);

  console.log("arr:", arrOfMeal);
}

// ! This function displays the Meal data to the DOM
function displayMeal(meals) {
  meals.forEach(function (el, ind) {
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let title = document.createElement("p");
    title.textContent = el.strMeal;
    let price = document.createElement("p");
    price.textContent = el.price;

    let addToCart = document.createElement("button");
    addToCart.setAttribute("id", "addtocart");
    addToCart.textContent = "Add to Cart";
    addToCart.addEventListener("click", function () {
      addMe(el, ind);
    });

    box.append(image, title, price, addToCart);
    document.querySelector("#menu").append(box);
  });
}

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function addMe(el) {
  cartArr.push(el);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  let count = document.getElementById("count");
  let counting = cartArr.length;
  count.textContent = counting++;
  console.log("ind:", counting);
}
